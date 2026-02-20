import { connect } from "react-redux"
import { Link } from "react-router-dom"

const navigation = {
    solutions: [
      { name: 'Health-Tech', href: '/solutions/health' },
      { name: 'Data Intelligence', href: '/solutions/data' },
      { name: 'Cloud Infrastructure', href: '/solutions/cloud' },
      { name: 'Cybersecurity', href: '/solutions/security' },
    ],
    support: [
      { name: 'Contact Mission Control', href: '/contact' },
      { name: 'Knowledge Base', href: '/blog' },
    ],
    company: [
      { name: 'Cosmovision', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Tech Experts', href: '/experts' },
      { name: 'Compliance', href: '/compliance' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Security Protocol', href: '/security-compliance' },
    ],
    social: [
      {
        name: 'Instagram',
        href: 'https://instagram.com/cosmic_imagination369',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props} >
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: 'https://github.com/barran33',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        ),
      }
    ],
  }

function Footer(){
    return(
        <footer className="bg-black border-t border-zinc-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-full py-16 px-6 lg:px-12">
          <div className="xl:grid xl:grid-cols-3 xl:gap-12">
            
            {/* Branding Section */}
            <div className="space-y-8 xl:col-span-1">
              <img 
                src={'https://i.ibb.co/39SbjcZF/cm336.jpg'}
                width={200}
                alt="Cosmic Imagination Logo"
                className="rounded-lg opacity-90 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                Fusing high-performance engineering with digital intelligence. We find the cosmic frequency to bring your vision into universal harmony.
              </p>
              <div className="flex space-x-5">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-500 hover:text-cyan-400 transition-colors">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-500">Industry Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-500">Operations</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-500">Enterprise</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-500">Governance</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-zinc-500">
              &copy; {new Date().getFullYear()} Cosmic Imagination, Inc. All rights reserved.
            </p>
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] mt-4 md:mt-0">
              Engineered for the Universal Intelligence
            </p>
          </div>
        </div>
      </footer>
    )
}

const mapStateToProps = state =>({})
export default connect(mapStateToProps, {})(Footer)