import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative">
      {/* Tree crown footer graphic */}
      <div className="tree-crown w-full"></div>

      {/* Footer content */}
      <div className="bg-amber-900 text-amber-100 pt-8 pb-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Postaw na Żołędzie</h2>
              <p className="text-amber-300">Wyjątkowa gra stworzona przez zespół z WSPA Lublin</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Nawigacja</h3>
                <ul className="space-y-2">
                  <li><Link href="#game" className="hover:text-amber-300 transition-colors">Gra</Link></li>
                  <li><Link href="#features" className="hover:text-amber-300 transition-colors">Cechy</Link></li>
                  <li><Link href="#gameplay" className="hover:text-amber-300 transition-colors">Rozgrywka</Link></li>
                  <li><Link href="#team" className="hover:text-amber-300 transition-colors">Zespół</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Kontakt</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-amber-300 transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-amber-300 transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-amber-300 transition-colors">Instagram</a></li>
                  <li><a href="mailto:kontakt@przykład.com" className="hover:text-amber-300 transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-700/50 mt-8 pt-8 text-center">
            <p>
              ©
              {new Date().getFullYear()}
              {' '}
              Postaw na Żołędzie. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-sm mt-2">Stworzone przez zespół studentów WSPA Lublin</p>
          </div>
        </div>

        {/* Oak leaf decorations */}
        <div className="absolute bottom-10 left-6 w-10 h-10 leaf leaf-1 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-20 right-10 w-12 h-12 leaf leaf-2 animate-float" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-20 right-[15%] w-8 h-8 leaf leaf-1 animate-float" style={{ animationDelay: '0.8s' }}></div>
      </div>
    </footer>
  );
};
