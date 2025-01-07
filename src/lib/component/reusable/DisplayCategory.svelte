<script>
  export let categoryName = "";
   export let text = "";

  /**
     * @type {string | any[]}
     */
   export let categoryData = [];


  import Button from "./Button.svelte";
</script>

<div class="font-Noto">
  <h1
    class="mt-16 mb-8 text-center text-3xl md:text-4xl font-Noto font-semibold"
  >
    {categoryName}
  </h1>

  <div class="mx-6 lg:hidden">
   {#if categoryData.length > 0}
    {#each categoryData as data}
      <div class="bg-[#F2F2F2] rounded-sm my-4 pt-12 px-6">
        <div class="">
          {#if data.status}
            <p
              class="uppercase font-bold text-white bg-black rounded text-xs p-1 w-fit"
            >
              {data.status}
            </p>
          {/if}
          <h3 class="uppercase font-semibold tracking-widest">
            {data.heading}
          </h3>
          <h4 class="py-2 text-xl font-medium">{data.sub_heading}</h4>
          <p class="text-base !leading-relaxed">{data.body}</p>
          {#if data.btnArray.length > 0}
            <div class="flex my-4 md:hidden">
              {#each data.btnArray as text}
                <Button
                  {text}
                  styles={"uppercase mt-2 font-semibold  last-of-type:ml-16"}
                  text_size={"sm"}
                  icon={"MoveRight"}
                />
              {/each}
            </div>
          {/if}
        </div>
        <img
          src={data.img}
          alt=""
          class="mx-auto flex justify-center item-center"
        />
        {#if data.banner}
          <div class=" mt-8 pb-4">
            <img
              src={data.banner.img_lg}
              alt=""
              class="mx-auto max-h-[200p x] w-full flex justify-center item-center object-cover bg-top hiddec n rounded-t-sm"
            />
            <div class="bg-[#1E232D] text-white pl-8 pb-6 !mb-6 rounded-b-sm pt-4">
              <p
                class="uppercase font-bold text-black bg-white rounded text-xs p-1 w-fit "
              >
                {data.banner.status}
              </p>
              <p>{data.banner.heading}</p>
              <Button
                text={data.banner.btn}
                styles={"uppercase mt-2 font-semibold   text-xs text-white"}
                text_size={"sm"}
                icon={"MoveRight"}
              />
            </div>
          </div>
        {/if}
      </div>
    {/each}
    
   {/if}
  </div>

  <div class="mx-6 hidden  lg:flex flex-wrap items-start justify-center gap-4">
    {#if categoryData.length > 0}
      {#each categoryData as data, idx}
      {#if idx === 0}
        <div class="w-screen rounded-md bg-[#F2F2F2]">
          <div class="flex items-center justify-around mt-7">
            <img
              src={data.img}
              alt=""
              class=" max-w-[300px] w-1/3 flex justify-center item-center object-cover"
            />

            <div class="w-1/3 pl-16">
              <div class="">
                {#if data.status}
                  <p
                    class="uppercase font-bold text-white bg-black rounded text-xs p-1 w-fit"
                  >
                    {data.status}
                  </p>
                {/if}
                <h3 class="uppercase font-semibold tracking-widest text-sm">
                  {data.heading}
                </h3>
                <h4 class="py-2 text-sm font-medium">{data.sub_heading}</h4>
                <p class="text-xs pr-24 !leading-relaxed">{data.body}</p>
                {#if data.btnArray.length > 0}
                  <div class="flex my-4  md:hidden">
                    {#each data.btnArray as text}
                      <Button
                        {text}
                        styles={`uppercase mt-2 font-semibold  ${data.btnArray.length > 1 ? "last-of-type:ml-16" : null}`}
                        text_size={"sm"}
                        icon={"MoveRight"}
                      />
                    {/each}
                  </div>
                {/if}
              </div>

              {#if data.banner}
                <div class="max-w-[520px] j flex mt-8 pb-4">
                  <img
                    src={data.banner.img}
                    alt=""
                    class=" -mr-2 max-w-44 flex justify-center rounded-l-md item-center"
                  />
                  <div class="bg-[#1E232D] text-white p-8 pb-6 rounded-r-md">
                    <p
                      class="uppercase font-bold text-black bg-white rounded text-[8px] p-1 w-fit"
                    >
                      {data.banner.status}
                    </p>
                    <p class="text-xs mt-2">{data.banner.heading}</p>
                    <Button
                      text={data.banner.btn}
                      styles={"uppercase mt-2 font-semibold   text-xs text-white"}
                      text_size={"sm"}
                      icon={"MoveRight"}
                    />
                  </div>
                </div>
              {/if}
            </div>
          </div>
        </div>
      {:else}
        <div class="w-[calc(50%-.5rem)]  bg-[#F2F2F2] rounded-md min-h-[400px] flex justify-center item-center">

           <img
              src={data.img}
              alt=""
              class=" max-w-[350px] w-1/3 flex justify-center item-center object-contain"
            />
          <div class="w-1/2 my-auto pl-16">
            <div class="">
              {#if data.status}
                <p
                  class="uppercase font-bold text-white bg-black rounded text-xs p-1 w-fit"
                >
                  {data.status}
                </p>
              {/if}
              <h3 class="uppercase font-semibold tracking-widest text-sm">
                {data.heading}
              </h3>
              <h4 class="py-2 text-sm font-medium">{data.sub_heading}</h4>
              <p class="text-xs pr-24 !leading-relaxed">{data.body}</p>
              {#if data.btnArray.length > 0}
                <div class="flex my-4 flex-col 2xl:!flex-row 2xl:!gap-8">
                  {#each data.btnArray as text}
                    <Button
                      {text}
                      styles={`uppercase mt-2 font-semibold  `}
                      text_size={"sm"}
                      icon={"MoveRight"}
                    />
                  {/each}
                </div>
              {/if}
            </div>

            {#if data.banner}
              <div class="max-w-[520px]  flex mt-8 pb-4">
                <img
                  src={data.banner.img}
                  alt=""
                  class=" -mr-2 max-w-44 flex justify-center rounded-l-md item-center"
                />
                <div class="bg-[#1E232D] text-white p-8 pb-6 rounded-r-md">
                  <p
                    class="uppercase font-bold text-black bg-white rounded text-[8px] p-1 w-fit"
                  >
                    {data.banner.status}
                  </p>
                  <p class="text-xs  mt-2">{data.banner.heading}</p>
                  <Button
                    text={data.banner.btn}
                    styles={"uppercase mt-2 font-semibold   text-xs text-white"}
                    text_size={"sm"}
                    icon={"MoveRight"}
                  />
                </div>
              </div>
            {/if}
          </div>
        </div>
      {/if}
    {/each}
    {/if}
    <Button {text} icon="MoveRight" styles={" text-sm uppercase font-semibold"}/>
  </div>


 
</div>
