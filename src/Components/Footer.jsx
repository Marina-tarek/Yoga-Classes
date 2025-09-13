import logoImg from "../assets/yogaLogo.jpg"
function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 py-10 mt-16">
<div className="container mx-auto">
        <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <div className="flex justify-center ">
            <img src={logoImg} alt="logo image" className="h-[70px] rounded-full"/>
          </div>
          <p className="text-sm leading-6">
            YogaLife is your space for balance, mindfulness, and growth.  
            Join us to practice yoga, improve flexibility, and live a healthier life.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400">Home</a></li>
            <li><a href="#" className="hover:text-purple-400">About</a></li>
            <li><a href="#" className="hover:text-purple-400">Classes</a></li>
            <li><a href="#" className="hover:text-purple-400">Schedule</a></li>
            <li><a href="#" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@yogalife.com" className="hover:text-purple-400">info@yogalife.com</a></li>
            <li>Phone: <a href="tel:+123456789" className="hover:text-purple-400">+1 234 567 89</a></li>
            <li>Location: Cairo, Egypt</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YogaLife. All rights reserved.
      </div>
</div>
    </footer>
  )
}

export default Footer