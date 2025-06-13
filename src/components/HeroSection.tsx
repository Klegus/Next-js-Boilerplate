import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section id="game" className="min-h-screen wood-bg flex items-center pt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 leaf leaf-1 opacity-40" 
           style={{transform: 'rotate(-15deg)'}}></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 leaf leaf-2 opacity-30" 
           style={{transform: 'rotate(10deg)'}}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 leaf leaf-1 opacity-20" 
           style={{transform: 'rotate(25deg)'}}></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-4">
              Postaw na Żołędzie
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-amber-900">
              Ekscytujący teleturniej oparty na popularnym formacie "Postaw na Milion" - ale tutaj walczysz o żołędzie!
            </p>
            <p className="text-lg mb-8 text-amber-700">
              Sprawdź swoją wiedzę, podejmuj ryzykowne decyzje i zgarnij całą stawkę żołędzi w tej emocjonującej grze strategicznej.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#features" 
                className="py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors shadow-lg"
              >
                Odkryj grę
              </Link>
              <Link 
                href="#gameplay" 
                className="py-3 px-6 border-2 border-amber-600 text-amber-700 hover:bg-amber-100 rounded-lg transition-colors"
              >
                Zobacz rozgrywkę
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 animate-slide-in-right">
            <div className="glass-effect rounded-xl p-4 relative">
              {/* Placeholder for game screenshot - replace with your actual game image */}
              <div className="aspect-video bg-amber-200 rounded-lg flex items-center justify-center"
                   style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'600\' height=\'337\' viewBox=\'0 0 600 337\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'600\' height=\'337\' fill=\'%23FCD34D\'/%3E%3Cpath d=\'M300 168.5C358.66 168.5 406 147.42 406 121.5C406 95.5797 358.66 74.5 300 74.5C241.34 74.5 194 95.5797 194 121.5C194 147.42 241.34 168.5 300 168.5Z\' fill=\'%23B45309\' fill-opacity=\'0.7\'/%3E%3Crect x=\'214\' y=\'121\' width=\'172\' height=\'142\' fill=\'%23B45309\' fill-opacity=\'0.7\'/%3E%3Cpath d=\'M300 262.5C358.66 262.5 406 241.42 406 215.5C406 189.58 358.66 168.5 300 168.5C241.34 168.5 194 189.58 194 215.5C194 241.42 241.34 262.5 300 262.5Z\' fill=\'%23B45309\' fill-opacity=\'0.7\'/%3E%3Cpath d=\'M300 293.5C341.974 293.5 376 281.77 376 267.5C376 253.23 341.974 241.5 300 241.5C258.026 241.5 224 253.23 224 267.5C224 281.77 258.026 293.5 300 293.5Z\' fill=\'%23B45309\'/%3E%3Ccircle cx=\'300\' cy=\'167\' r=\'34\' fill=\'%23FBBF24\'/%3E%3Cellipse cx=\'300\' cy=\'251\' rx=\'63\' ry=\'12\' fill=\'%23FBBF24\'/%3E%3Cpath d=\'M315 159C329.359 159 341 147.359 341 133C341 118.641 329.359 107 315 107C300.641 107 289 118.641 289 133C289 147.359 300.641 159 315 159Z\' fill=\'%23FBBF24\'/%3E%3C/svg%3E")'}}>
              </div>
              <Link href="#download" className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                <button className="btn-modern btn-primary font-troika text-xl py-4 px-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Spróbuj Teraz!
                </button>
              </Link>
            </div>
            
            {/* Floating acorn */}
            <div className="absolute -bottom-10 left-10 animate-float" style={{animationDelay: "1.5s"}}>
              <div className="w-16 h-16 bg-contain bg-center bg-no-repeat" 
                   style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23B45309\' d=\'M12,2C9.5,2 7.45,3.8 7.07,6.19L6.56,9.33C6.89,9.12 7.25,9 7.63,9C8.41,9 9.09,9.5 9.34,10.2C9.58,9.5 10.26,9 11.04,9C11.37,9 11.68,9.1 11.95,9.24C12.21,9.1 12.52,9 12.84,9C13.62,9 14.3,9.5 14.55,10.2C14.79,9.5 15.47,9 16.25,9C16.68,9 17.08,9.14 17.43,9.4L16.95,6.19C16.57,3.8 14.5,2 12,2M15.53,10.67C15.32,11.25 14.73,11.65 14.05,11.65C14.04,11.65 14.03,11.65 14.03,11.65L13.5,15H17L17.5,16H13.25L12.5,20.25C12.5,20.33 12.5,20.4 12.5,20.5C12.5,21.33 13.17,22 14,22C14.83,22 15.5,21.33 15.5,20.5C15.5,20.4 15.5,20.33 15.5,20.25L16.18,16H19.5L20,15H16.4L16.93,11.65C16.93,11.65 16.92,11.65 16.91,11.65C16.18,11.65 15.56,11.19 15.38,10.55C15.38,10.59 15.38,10.63 15.38,10.67C15.38,10.67 15.38,10.67 15.38,10.67H15.53M8.63,11.65C8.62,11.65 8.61,11.65 8.61,11.65L8.5,12.2L8.1,14.05L7.9,15H9.59C9.58,15.06 9.58,15.13 9.58,15.19C9.58,15.23 9.59,15.26 9.59,15.3L9,20.25C9,20.33 9,20.4 9,20.5C9,21.33 9.67,22 10.5,22C11.33,22 12,21.33 12,20.5C12,20.4 12,20.33 12,20.25L12.61,15.3C12.61,15.26 12.62,15.23 12.62,15.19C12.62,15.13 12.62,15.06 12.61,15H14.5L14.93,12.2L14.82,11.65C14.81,11.65 14.8,11.65 14.79,11.65C14.11,11.65 13.53,11.25 13.31,10.67H13.17C13.17,10.67 13.17,10.67 13.17,10.67C13.17,10.63 13.17,10.59 13.17,10.55C13,11.19 12.38,11.65 11.64,11.65C11.63,11.65 11.62,11.65 11.61,11.65C11.56,11.65 11.5,11.64 11.35,11.62C11.07,11.83 10.75,11.95 10.39,11.95C10.28,11.95 10.18,11.94 10.08,11.91C9.85,11.96 9.62,12 9.38,12C9.12,12 8.88,11.96 8.65,11.91C8.55,11.94 8.45,11.95 8.34,11.95C8,11.95 7.7,11.84 7.42,11.65C7.28,11.64 7.16,11.65 7.07,11.65L7.39,15H8.9L8.03,20.25C8.03,20.33 8.03,20.4 8.03,20.5C8.03,21.33 8.7,22 9.53,22C10.36,22 11.03,21.33 11.03,20.5C11.03,20.4 11.03,20.33 11.03,20.25L11.95,15H12.5L12.93,12.2L12.81,11.65C12.8,11.65 12.79,11.65 12.78,11.65C12.1,11.65 11.5,11.25 11.29,10.67H11.15C11.15,10.67 11.15,10.67 11.15,10.67C11.15,10.63 11.15,10.59 11.15,10.55C10.97,11.19 10.35,11.65 9.62,11.65C9.61,11.65 9.6,11.65 9.59,11.65H9.03L9.16,11.12L9.4,10.05C9.38,10.09 9.38,10.13 9.38,10.17C9.38,10.17 9.38,10.17 9.38,10.17H9.53C9.32,10.75 8.73,11.15 8.05,11.15C8.04,11.15 8.03,11.15 8.03,11.15L8.16,10.62C8.16,10.58 8.16,10.54 8.16,10.5L8.19,10.39C8.24,10.08 8.53,9.85 8.87,9.85C9.26,9.85 9.58,10.17 9.58,10.56C9.58,10.6 9.57,10.63 9.57,10.67H9.72C9.72,10.67 9.72,10.67 9.72,10.67C9.72,10.63 9.72,10.59 9.72,10.55C9.54,11.19 8.92,11.65 8.19,11.65C8.18,11.65 8.17,11.65 8.16,11.65H8.63Z\' /%3E%3C/svg%3E")'}}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80">
        <div className="w-8 h-12 rounded-full border-2 border-amber-800 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-amber-800 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};
