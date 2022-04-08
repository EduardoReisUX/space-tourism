<script lang="ts">
  import logo from "./../assets/shared/logo.svg";
  import openMenu from "./../assets/shared/icon-hamburger.svg";
</script>

<header class="min-w-full">
  <nav class="p-6 w-full flex justify-between">
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
    <button>
      <img src={openMenu} alt="Open menu" />
    </button>
  </nav>
</header>
