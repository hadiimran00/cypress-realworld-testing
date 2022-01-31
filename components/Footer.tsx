const navigation = {
  main: [
    { name: "Docs", href: "https://docs.cypress.io/" },
    {
      name: "Real World App",
      href: "https://github.com/cypress-io/cypress-realworld-app",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC-EOsTo2l2x39e4JmSaWNRQ",
    },
    {
      name: "Discord",
      href: "https://discord.gg/cMjUZg7",
    },
    {
      name: "GitHub",
      href: "https://github.com/cypress-io/cypress",
    },
  ],
}

export default function Footer() {
  return (
    <>
      <hr />
      <footer className="bg-teal-500">
        {/* Email Subscription */}
        <div className="py-8 lg:mx-auto lg:flex lg:max-w-7xl lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="uppercase tracking-wider text-gray-50">
              Subscribe for updates
            </h3>
            {/* <p className="mt-2 text-base text-gray-500">
            The latest updates sent to your inbox.
          </p> */}
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-jade-300 py-2 px-4 text-lg font-semibold text-teal-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <hr />
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-50">
            &copy; {`${new Date().getFullYear()}`} Cypress. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
