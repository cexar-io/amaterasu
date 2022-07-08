<script>
  // @ts-nocheck
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  import { settings } from '$lib/utilities/settings';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  import Pointer from '$lib/components/Pointer.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import FloatingButton from '$lib/components/FloatingButton.svelte';
  import Visualizer from '$lib/components/Visualizer.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let open = false;
  let assets = getAssets();

  onMount(async () => {
    AOS.init();
  });

  async function getAssets() {
    // let headers = {};

    // if (settings.apiKey)
    //   headers = { 'x-api-key': settings.apiKey }

    const response = await fetch(`${settings.api}/assets?asset_contract_address=${settings.asset}&limit=50&order_direction=desc&offset=0&include_orders=false`, {
			headers: { 'x-api-key': settings.apiKey }
    });
    const json = await response.json();

    if (response.ok) {
      json.assets.map(async asset => {
        const assetResponse = await fetch(`${settings.api}/asset/${settings.asset}/${asset.token_id}/`, {
          headers: { 'x-api-key': settings.apiKey }
        });
        const assetJson = await assetResponse.json();

        if (assetResponse.ok)
          json.assets.filter(filteredAsset => filteredAsset.token_id === asset.token_id)[0].price = assetJson.collection.payment_tokens.filter(token => token.symbol === 'ETH')[0].eth_price;
      });

      return json;
    } else {
      throw new Error(json);
    }
  }
</script>

<Pointer/>
<Nav/>
<FloatingButton/>

<main>
  <div class="lg:container mx-auto px-10 md:px-20">
    <!-- intro -->
    <section></section>
    <!-- bar -->
    <section id="bar">
      <h1 class="mb-6" data-aos="fade-down"  data-aos-duration="1000">
        <div class="index">01.</div>
        bar
      </h1>
      <h2 class="mb-6" data-aos="fade-right" data-aos-duration="1000">La leyenda de la diosa del sol, Amaterasu</h2>
      <p class="mb-10" data-aos="fade-right" data-aos-duration="1000">Amaterasu, diosa del Sol, irritada por los celos de su hermano, decidió esconderse en una cueva y cubrir la entrada con una gran piedra. Esa terrible decisión desató la noche eterna en el Cielo y en la Tierra.</p>
      <img src="/images/bar-1.png" alt="" class="mb-10" data-aos="fade-left" data-aos-duration="1000">
      <p class="mb-10" data-aos="fade-right" data-aos-duration="1000">Sumidos en la oscuridad y el caos, otros dioses se unieron para idear un plan y así liberar a la diosa del encierro. Colocaron árboles cubiertos de joyas delante de la cueva, encendieron hogueras e hicieron que la diosa de la Danza, Uzume, bailara. El estrépito causado por el baile, las risas y los gritos hizo que Amaterasu, llena de curiosidad, abriera la puerta de la cueva para ver qué sucedía en su ausencia.</p>
      <img src="/images/bar-2.png" alt="" class="mb-10" data-aos="fade-left" data-aos-duration="1000">
      <p class="mb-6" data-aos="fade-up" data-aos-duration="1000">Cuando se asomó, se encontró de frente a un espejo que le mostró su brillante reflejo, el cual nunca había visto antes, y la imagen de su propio brillo la sorprendió tanto que los demás dioses aprovecharon la distracción para cerrar la puerta de la cueva y convencerla de regresar para terminar con las tinieblas que gobernaban el mundo.</p>
      <p class="mb-6" data-aos="fade-up" data-aos-duration="1000">Inspirados por la gran celebración que terminó con la oscuridad y devolvió la luz al mundo, sin olvidarnos del concepto de la planta baja, creamos AMATERASU.</p>
      <p class="mb-6" data-aos="fade-up" data-aos-duration="1000">Buscamos la máxima exclusividad para quienes hablen nuestro mismo idioma y gocen de nuestras costumbres.</p>
      <p class="mb-6" data-aos="fade-up" data-aos-duration="1000">Premiaremos a clientes seleccionados para que formen parte de nuestra sociedad. En ella podrán disfrutar de los beneficios de Amaterasu: menús preferenciales, cócteles de autor, invitaciones a catas y eventos, y más.</p>
      <p class="mb-6" data-aos="fade-up" data-aos-duration="1000">Y vos, ¿querés ser parte de AMATERASU?</p>
    </section>
    <!-- membresia -->
    <section id="membresia">
      <h1 class="mb-4" data-aos="fade-down" data-aos-duration="1000">
        <div class="index">02.</div>
        membresia
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="md:col-span-2">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            >
            <SwiperSlide>
              <img src="/images/membresia-1.png" alt="" class="w-full" data-aos="fade-right"  data-aos-duration="1000">
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/membresia-2.png" alt="" class="w-full" data-aos="fade-right"  data-aos-duration="1000">
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/membresia-3.png" alt="" class="w-full" data-aos="fade-right"  data-aos-duration="1000">
            </SwiperSlide>
          </Swiper>
        </div>
        <div data-aos="fade-left"  data-aos-duration="1000">
          <p class="text-sm leading-7">Queremos premiar a nuestros clientes con un lugar de disfrute privilegiado, un espacio en donde se ofrecen productos exclusivos, acceso ilimitado y menús pensados para quienes quieran gozar de un momento único.</p>
          <ul class="my-7">
            <li>
              <h3>MENÚ PREFERENCIAL</h3>
              <p>Solo aquellos que formen parte de Amaterasu probarán nuestra cocina digna de nuestra diosa.</p>
            </li>
            <li>
              <h3>TRAGO DE BIENVENIDA</h3>
            </li>
            <li>
              <h3>CÓCTELES DE AUTOR</h3>
              <p>Combinaciones de sabores creadas solo para quienes se animen a ser parte de este espacio.</p>
            </li>
            <li>
              <h3>INVITACIONES DE CATAS Y EVENTOS</h3>
              <p>Nos gusta honrar la vuelta de la vida con distintas propuestas para nuestros miembros.</p>
            </li>
          </ul>
          <h2 class="mb-3">Como ser miembro</h2>
          <p class="text-sm leading-7">Para la membresía tradicional, podes ingresar a este link y probar tu suerte. Para la membresía DEFI, vamos a habilitar NFTs periódicamente para que futuros miembros puedan adquirirlas.</p>
        </div>
      </div>
    </section>
    <!-- nft -->
    <section id="nft">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        <div class="index">03.</div>
        nft
      </h1>

      <h2 class="uppercase font-gotham-thin text-amaterasu-white opacity-25 text-lg mb-6" data-aos="fade-left" data-aos-duration="1000">
        / ¿te imaginás ser parte de una sociedad exclusiva?
      </h2>
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="mb-6">Cuando Amaterasu es persuadida para regresar la luz al mundo, deja atrás la penumbra de su encierro y asciende a su lugar en el Cielo, desde donde ilumina todo lo demás.</p>
        <p class="mb-6">Amaterasu Society es ese lugar al que se llega luego de atravesar la oscuridad de la cueva, un lugar desde donde la deidad observa y controla quién es digno de iluminarse junto a ella.</p>
        <p class="mb-6">Tenemos preparados beneficios especiales para que seas parte de un lugar que te haga sentir único:</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-0">
        <div class="col-span-2 hidden md:block">
          <hr class="border border-white border-opacity-5 my-10">
        </div>
        <div data-aos="fade-down" data-aos-duration="1000">
          <h2 class="uppercase font-gotham-narrow-bold text-2xl mb-4 mt-10 md:mt-0">Beneficios</h2>
          <ul class="font-gotham-narrow-book text-base opacity-40 list-square list-outside ml-4">
            <li class="mb-2">Menú preferencial: solo aquellos que formen parte de Amaterasu probarán nuestra cocina digna de nuestra diosa.</li>
            <li class="mb-2">Tragos de Bienvenida</li>
            <li class="mb-2">Acceso a toda la carta de comida, incluyendo de Himitsu Kichi</li>
            <li class="mb-2">Cócteles de autor: combinaciones de sabores creadas solo para quienes se animen a ser parte de este espacio.</li>
            <li class="mb-2">Invitaciones a catas y eventos: nos gusta honrar la vuelta de la vida con distintas propuestas para nuestros miembros.</li>
            <li class="mb-2">Entradas a los bares amigos de casa: en Amaterasu queremos que nuestros miembros celebren, estamos creando una red de reciprocidad no solamente en Argentina, sino también a nivel mundial. El listado está habilitado en el portal de miembros.</li>
            <li class="mb-2">Acceso a locker de whisky en el bar</li>
            <li class="mb-2">Participación en el club de inversores web 3.0: 20% de las ganancias de NFT serán invertidas en otros proyectos y dividir ganancias en partes iguales con los otros miembros. </li>
            <li class="mb-2">12% de descuento en Himitsu y Amaterasu</li>
            <li class="mb-2">Acceso a evento anual de Amaterasu para miembros y programa de viaje a Japón.</li>
          </ul>
        </div>
        <div class="flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000">
          <h2 class="uppercase font-gotham-narrow-bold text-2xl mb-4">Beneficios extras para <span class=" text-amaterasu-brown">Legendarios</span></h2>
          <ul class="font-gotham-narrow-book text-base opacity-40 list-square list-outside ml-4">
            <li class="mb-2">Botella de whisky Japonés de regalo.</li>
            <li class="mb-2">Una cena anual en Himitsu armada por nuestro Itamae</li>
            <li class="mb-2">Cierre de Amaterasu para el/la miembro y amigos una vez por año.</li>
            <li class="mb-2">20% de descuento en consumos.</li>
            <li class="mb-2">Acceso VIP al evento anual y programa de viaje a Japón.</li>
          </ul>
        </div>
      </div>

      <hr class="border border-white border-opacity-5 my-10">

      <h2 class="font-gotham-thin text-xl text-white opacity-50 mb-3" data-aos="fade-left" data-aos-duration="1000">
        SERIE #1
      </h2>
      <h2 class="mb-6 text-4xl" data-aos="fade-right" data-aos-duration="1000">
        Shinkokuna Kaeru <span class=" opacity-20 text-lg">(sapos serios)</span>
      </h2>
      <div data-aos="fade-right" data-aos-duration="1000">
        <p class="mb-6">En la cultura japonesa, el sapo simboliza el regreso de la buena energía, la riqueza y la felicidad.</p>
        <p class="mb-6">Por esta razón, para ser parte de Amaterasu Society deberán acceder a una serie de imágenes y obtener su favorita, cada una estará asociada a un NFT.</p>
        <p class="mb-6">Las obras fueron pensadas y realizadas para Amaterasu por artistas seleccionados, es decir, son únicas. Cada obra está inspirada en este animal y servirá a su dueño como un talismán, que no solo le traerá buena fortuna, sino también todos los beneficios de ser parte de nuestra sociedad.</p>
        <p class="mb-6">Nadie tendrá una obra igual, por eso nos sentimos obligados a avisarte que solo hay 30 disponibles. Así que, ¿qué esperás para tener tu propio talismán?
        Te dejamos la galería con las imágenes para que puedas elegir el tuyo.</p>
      </div>

      <!-- nft list -->
      {#await assets}
        <div class="w-full flex items-center justify-center">
          <img src="/images/spinner.svg" alt="" in:fade>
        </div>
      {:then assets}
        <div class="grid-cols-1 md:grid-cols-5 mt-36 gap-6 mb-20 hidden md:grid">
          {#each assets.assets as asset}
            <Visualizer {...asset} on:click={() => { open = true }}/>
          {/each}
        </div>
        <div class="md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            >
            {#each assets.assets as asset}
              <SwiperSlide>
                <Visualizer {...asset} on:click={() => { open = true }}/>
              </SwiperSlide>
            {/each}
          </Swiper>
        </div>
      {/await}

      <!-- que son -->
      <div class="text-center mt-10 md:mt-0">
        <h2 class="text-3xl font-gotham-narrow-book text-gray-custom" data-aos="fade-down" data-aos-duration="1000">Guia básica</h2>
        <h1 class="text-6xl normal-case mb-10" data-aos="fade-up" data-aos-duration="1000">Qué son los NFT</h1>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p class="mb-6">Desde Amaterasu Society queremos que conozcas qué son los NFT, por eso te dejamos una guía básica para que puedas tenerla a mano siempre que la necesites.<br>
          Los NFT (Non-Fungible Tokens) son activos digitales que confieren valor a bienes intangibles. Mediante la tecnología de blockchain (cadena de bloques), se asocian a un archivo digital específico. Los NFT son tokens que no se consumen con su uso, es decir, no pueden ser sustituidos o reemplazados por nada (lo contrario que sucede con el dinero); estos activos se equiparan a las obras de arte: son únicas e irrepetibles.</p>
          <p>Estos activos digitales son unidades individuales con un valor único. Cada uno tiene un identificador en el que se registran metadatos (nombre del autor, valor inicial, historial de ventas) mediante la tecnología de cadena de bloques, que evita cualquier alteración o falsificación de esos datos, por lo que garantiza que el activo no pueda ser duplicado.</p>
        </div>
      </div>
    </section>
  </div>
  <Footer/>
</main>

<Modal bind:open>
  <h2 class="font-gotham-narrow-bold text-5xl mb-10">Beneficios</h2>
  <ul class="font-gotham-narrow-book text-lg list-square list-outside ml-4">
    <li class="mb-2">Menú preferencial: solo aquellos que formen parte de Amaterasu probarán nuestra cocina digna de nuestra diosa.
    <li class="mb-2">Tragos de Bienvenida</li>
    <li class="mb-2">Acceso a toda la carta de comida, incluyendo de Himitsu Kichi</li>
    <li class="mb-2">Reserva de todo el bar una vez por año</li>
    <li class="mb-2">Cócteles de autor: combinaciones de sabores creadas solo para quienes se animen a ser parte de este espacio.</li>
    <li class="mb-2">Invitaciones a catas y eventos: nos gusta honrar la vuelta de la vida con distintas propuestas para nuestros miembros.</li>
    <li class="mb-2">Entradas a los bares amigos de casa: en Amaterasu queremos que nuestros miembros celebren, estamos creando una red de reciprocidad no solamente en Argentina, sino también a nivel mundial. El listado está habilitado en el portal de miembros.</li>
    <li class="mb-2">Acceso a locker de whisky en el bar</li>
    <li class="mb-2">Participación en el pool de inversores web 3.0</li>
  </ul>
</Modal>
