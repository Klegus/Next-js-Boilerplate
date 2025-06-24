# ---- Dependencies -----
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies based on lockfile
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps --ignore-scripts

# ---- Builder -----
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

# Copy all project files
COPY . .

# Build the Next.js application (standalone output)
RUN npm run build

# ---- Runner / Production -----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy the standalone build
COPY --from=builder /app/.next/standalone ./
# Static assets
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js server
CMD ["node", "server.js"] 