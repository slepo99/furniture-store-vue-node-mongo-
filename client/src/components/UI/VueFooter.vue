<template>
  <div class="container-footer">
    <div class="links">
      <div class="links-pages">
        <p>Living Room</p>
        <p>Bedroom</p>
        <p>Kitchen & Dining</p>
      </div>
      <div class="logo">
        <img src="@/assets/icons/header/Logo-Maynooth.svg" alt="" />
      </div>

      <div class="links-navigation">
        <p>About</p>
        <p>Blog</p>
        <p>Support</p>
      </div>
    </div>
    <hr class="hr" />
    <div class="social-media">
      <div>
        <a href="https://www.google.com/" target="_blank">
          <img src="@/assets/icons/footer/google.svg" alt="google" />
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/i.c.e._.c.o.l.d/" target="_blank">
          <img src="@/assets/icons/footer/inst.svg" alt="instagramm" />
        </a>
      </div>

      <div>
        <a href="https://twitter.com/?lang=ru" target="_blank">
          <img src="@/assets/icons/footer/twitter.svg" alt="twitter" />
        </a>
      </div>

      <div>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="@/assets/icons/footer/facebook.svg" alt="facebook" />
        </a>
      </div>
    </div>
    <div class="terms">
      <div>
        <p>© 2010 — 2020</p>
      </div>
      <div>
        <p>Privacy — Terms</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-footer",
};
</script>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
.container-footer {
  background-color: black;
  position: absolute;
  left: 0px;
  min-height: 410px;
  width: 100%;
}
.links {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 90%;
  margin-top: 97px;
}
.links-pages {
  display: flex;
  width: 33%;
}
.links-navigation {
  display: flex;
  width: 33%;
}
.logo {
  width: 200px;
}
.hr {
  width: 90%;
  border: 1px solid #ffffff;
  margin-top: 40px;
  transform: rotate(-0.15deg);
}
.social-media {
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin-top: 60px;
}
.terms {
  color: #ffffff;
  display: flex;

  max-width: 230px;
  margin-top: 40px;
}
.terms div p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
}
</style>
