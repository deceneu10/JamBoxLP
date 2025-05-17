export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">JamBox</h3>
            <p className="text-gray-300 mb-4">
              Transforming the way people experience music at venues around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="#for-users" className="text-gray-300 hover:text-white transition">For Users</a></li>
              <li><a href="#for-businesses" className="text-gray-300 hover:text-white transition">For Businesses</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-gray-300"></i>
                <span className="text-gray-300">123 Music Avenue, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-gray-300"></i>
                <a href="mailto:info@jambox.io" className="text-gray-300 hover:text-white transition">info@jambox.io</a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-gray-300"></i>
                <a href="tel:+14155555555" className="text-gray-300 hover:text-white transition">+1 (415) 555-5555</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} JamBox. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
