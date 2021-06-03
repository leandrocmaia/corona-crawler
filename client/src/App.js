import logo from './logo.svg';
import './App.css';
import './tailwind.output.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [state, setState] = useState({
    cases: [],
  })

  const [navbarOpen, setNavbarOpen] = useState(false);


  const api_url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${api_url}/cases`)
      .then(res => {
        const cases = res.data;
        console.log(cases)
        setState({ cases: cases });
      })
  }, []);


  return (
    
    <div>
      <div class="relative bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div class="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span class="sr-only">Workflow</span>
                      <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                    </a>
                    <div class="-mr-2 flex items-center md:hidden">
                      <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Corona Cases</a>
                </div>
              </nav>
            </div>

            <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                  </div>
                  <div class="-mr-2">
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close main menu</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                  <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Corona Cases</a>
                  </div>
                  <div role="none">
                    <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                      Log in
                  </a>
                  </div>
                </div>
              </div>
            </div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">Corona Cases Germany</span>
                  <span class="block text-indigo-600 xl:inline"> in real-time</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Check here the current daily statistics of COVID-19 cases in Germany by estate.
              </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a href="#cases" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                  </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Live demo
                  </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://www.apobank.de/dam/jcr:cca7ad9e-f73a-48aa-8a66-81ca3c2d2926/apohealth-news-infos-digital%20health-corona-mann-haelt-handy-o-g.jpg" alt="" />
        </div>






        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">




          </div>
        </div>
      </div>

      <div id="cases" class="relative max-w-7xl mx-auto m-8">
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">

        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Cases
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                New Cases (24h)
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Deaths
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {state.cases.map((item) => {
              return (

                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    {item.location}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    {item.total.toLocaleString()}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    {item.new.toLocaleString()}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    {item.deaths.toLocaleString()}
                  </td>
                </tr>
              );
            })}


          </tbody>
        </table>
</div></div>
      </div>

      <div class="bg-indigo-700"><div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <div class="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div class="xl:w-0 xl:flex-1">
            <h2 class="text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl sm:leading-9">Get notified whenever we publish something new</h2>
            <p class="max-w-3xl mt-3 text-lg leading-6 text-indigo-200" id="newsletter-headline">Sign up for our newsletter to stay up to date.</p>
          </div><div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form target="_blank" class="sm:flex" aria-labelledby="newsletter-headline" action="https://labnol.us1.list-manage.com/subscribe/post?u=f52af1b2d34e161675d992e00&amp;id=eb043dcd01" method="POST"><input type="email" name="MERGE0" aria-label="Email address" required="" class="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400" placeholder="Enter your email" />
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button type="submit" class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">Subscribe</button>
              </div>
            </form>
            <p class="mt-3 text-sm leading-5 text-indigo-200">We will never spam. That's our promise .</p>
          </div>
        </div>
      </div>
      </div>
      <footer class="relative max-w-7xl mx-auto m-8 text-sm text-center">
        Copyright 2021 <a href="http://leandromaia.io" class="no-underline hover:underline">leandromaia.io</a>
      </footer>

    </div>
  );
}

export default App;
