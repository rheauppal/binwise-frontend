{/* <html>
  <head>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
      rel="stylesheet"
      as="style"
      onload="this.rel='stylesheet'"
      href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Public+Sans%3Awght%40400%3B500%3B700%3B900"
    />

    <title>Galileo Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  </head>
  <body>
    <div class="relative flex size-full min-h-screen flex-col bg-[#f8fbfa] group/design-root overflow-x-hidden" style='font-family: "Public Sans", "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f3ec] px-10 py-3">
          <div class="flex items-center gap-4 text-[#0e1b13]">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 class="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em]">EcoRecycle</h2>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a class="text-[#0e1b13] text-sm font-medium leading-normal" href="#">Home</a>
              <a class="text-[#0e1b13] text-sm font-medium leading-normal" href="#">Learn</a>
              <a class="text-[#0e1b13] text-sm font-medium leading-normal" href="#">Events</a>
              <a class="text-[#0e1b13] text-sm font-medium leading-normal" href="#">Challenges</a>
              <a class="text-[#0e1b13] text-sm font-medium leading-normal" href="#">Groups</a>
            </div>
            <div class="flex gap-2">
              <button
                class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e8f3ec] text-[#0e1b13] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div class="text-[#0e1b13]" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e8f3ec] text-[#0e1b13] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div class="text-[#0e1b13]" data-icon="BellSimple" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style='background-image: url("https://cdn.usegalileo.ai/sdxl10/c1f159ed-ae93-44a2-899e-0f99278a3392.png");'
            ></div>
          </div>
        </header>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:p-4">
                <div
                  class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/76804bad-2cbf-4558-97df-b5142fef5d00.png");'
                >
                  <h1
                    class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
                  >
                    Recycling rules can be confusing. We're here to help.
                  </h1>
                  <label class="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                    <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
                      <div
                        class="text-[#50956c] flex border border-[#d1e6d9] bg-[#f8fbfa] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                        data-icon="MagnifyingGlass"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        placeholder="Find out what you can recycle"
                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e1b13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-full placeholder:text-[#50956c] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        value=""
                      />
                      <div class="flex items-center justify-center rounded-r-xl border-l-0 border border-[#d1e6d9] bg-[#f8fbfa] pr-[7px]">
                        <button
                          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#20df6c] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                          <span class="truncate">Quick scan</span>
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <h2 class="text-[#0e1b13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How to use EcoRecycle</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-col gap-3 text-center pb-3">
                <div class="px-4">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/6858d31c-7409-4829-ad39-d779462e0d64.png");'
                  ></div>
                </div>
                <p class="text-[#0e1b13] text-base font-medium leading-normal">Scan any item to see how to dispose of it</p>
              </div>
              <div class="flex flex-col gap-3 text-center pb-3">
                <div class="px-4">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/73c949ac-603c-4400-8a67-eb7654b24c94.png");'
                  ></div>
                </div>
                <p class="text-[#0e1b13] text-base font-medium leading-normal">Join challenges and earn points for recycling</p>
              </div>
              <div class="flex flex-col gap-3 text-center pb-3">
                <div class="px-4">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/7b4b5a8b-b6b1-4ff7-af68-bdb9777296c6.png");'
                  ></div>
                </div>
                <p class="text-[#0e1b13] text-base font-medium leading-normal">Connect with friends and local recyclers</p>
              </div>
            </div>
            <h2 class="text-[#0e1b13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Your recycling assistant</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-col gap-3 text-center pb-3">
                <div class="px-4">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/1473f244-fa8a-405e-8bb3-ab29f48df0f7.png");'
                  ></div>
                </div>
                <p class="text-[#0e1b13] text-base font-medium leading-normal">Plastic bottle</p>
              </div>
              <div class="flex flex-col gap-3 text-center pb-3">
                <div class="px-4">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/04976176-56b0-4278-94d8-dee79c11e33a.png");'
                  ></div>
                </div>
                <p class="text-[#0e1b13] text-base font-medium leading-normal">Aluminum can</p>
              </div>
              <div class="flex flex-col gap-3 text-center pb-3">
                <div class="px-4">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/21d9d91d-a379-449b-b15c-4e545d0290fc.png");'
                  ></div>
                </div>
                <p class="text-[#0e1b13] text-base font-medium leading-normal">Newspaper</p>
              </div>
              <div class="flex flex-col gap-3 text-center pb-3">
                <div class="px-4">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/2c2d2ca5-6153-48d9-b6f3-d32e62829b8d.png");'
                  ></div>
                </div>
                <p class="text-[#0e1b13] text-base font-medium leading-normal">Cardboard box</p>
              </div>
              <div class="flex flex-col gap-3 text-center pb-3">
                <div class="px-4">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style='background-image: url("https://cdn.usegalileo.ai/sdxl10/ae7b74e7-ea34-491d-8b94-25517300b350.png");'
                  ></div>
                </div>
                <p class="text-[#0e1b13] text-base font-medium leading-normal">Glass jar</p>
              </div>
            </div>
            <div class="@container">
              <div class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div class="flex flex-col gap-2 text-center">
                  <h1
                    class="text-[#0e1b13] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Ready to start recycling right?
                  </h1>
                  <p class="text-[#0e1b13] text-base font-normal leading-normal max-w-[720px">Download the app and get started today</p>
                </div>
                <div class="flex flex-1 justify-center">
                  <div class="flex justify-center">
                    <button
                      class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#20df6c] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                    >
                      <span class="truncate">Start using EcoRecycle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html> */}
