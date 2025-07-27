import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const AboutPage = () => {

  return (
    <div className="min-h-screen bg-custom-bg dark:bg-gray-900 transition-colors duration-300">
      {/* Contact Information Section */}
      <section className="py-16 pt-24 bg-custom-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact nous</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Location Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Localisation</h3>
                   <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>
                   <a href="https://maps.app.goo.gl/gZcXnMq9t99uwbgB7" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm leading-relaxed font-medium transition-colors duration-300 inline-block">
                     N°60, Zone Industrielle<br />
                     Tassila III, Agadir<br />
                     Maroc
                   </a>
                 </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-green-300 dark:hover:border-green-600 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Téléphone</h3>
                   <div className="h-px w-12 bg-gradient-to-r from-green-500 to-green-600 mx-auto opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>
                   <a href="https://wa.me/212661756580" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 text-sm leading-relaxed font-medium transition-colors duration-300 inline-block">
                     +212 661 756 580
                   </a>
                 </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">E-mail</h3>
                   <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>
                   <a href="mailto:cncwoodexpert@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm leading-relaxed font-medium transition-colors duration-300 inline-block break-all">
                     cncwoodexpert@gmail.com
                   </a>
                 </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-pink-300 dark:hover:border-pink-600 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent dark:from-pink-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">Instagram</h3>
                  <div className="h-px w-12 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>
                  <a href="https://www.instagram.com/woodexpert.ma/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 text-sm leading-relaxed font-medium transition-colors duration-300 inline-block">
                    @woodexpert.ma
                  </a>
                </div>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Facebook className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Facebook</h3>
                  <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>
                  <a href="https://www.facebook.com/woodexpertstore" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm leading-relaxed font-medium transition-colors duration-300 inline-block">
                    woodexpert Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 bg-custom-bg dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Trouvez-nous</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Visitez notre atelier à Agadir, Maroc. Nous sommes situés dans la zone industrielle de Tassila III.
            </p>
          </div>
          
          <div className="bg-custom-bg dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://maps.google.com/maps?q=CNC+WOOD+EXPERT,+N%C2%B060,+Zone+Industrielle,+Tassila+III,+Agadir,+Morocco&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CNC WOOD EXPERT - Agadir, Maroc"
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                  <span>N°60, Zone Industrielle, Tassila III, Agadir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;