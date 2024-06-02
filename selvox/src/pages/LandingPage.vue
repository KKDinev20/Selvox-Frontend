

<template>
    <nav>
        <a href="#" class="logo">Selvox</a>
        <div class="links">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Blog</a>
        </div>
        <button> I'M READY</button>
    </nav>

</template>

<style>
nav{
    padding: 60px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
}

nav .links {
    font-size: 18px;
}

nav a.logo{
    font-size: 33px;
    color: #FFB7CA;
    font-weight: 600;
}

button {
  --green: #FFB7CA;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--green);
  background: linear-gradient(to right, rgba(207, 137, 171, 0.1) 1%, transparent 40%,transparent 60% , rgba(218, 161, 192, 0.1) 100%);
  color: var(--green);
  box-shadow: inset 0 0 10px rgba(255, 183, 202, 0.4), 0 0 9px 3px rgba(255, 183, 202, 0.1);
}

button:hover {
  color: #FFB7CA;
  box-shadow: inset 0 0 10px rgba(253, 204, 232, 0.6), 0 0 9px 3px rgba(229, 162, 226, 0.2);
}

button:before {
  content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  transition: transform .4s ease-in-out;
  background: linear-gradient(to right, transparent 1%, rgba(219, 132, 186, 0.1) 40%,rgba(196, 129, 164, 0.1) 60% , transparent 100%);
}

button:hover:before {
  transform: translateX(15em);
}
nav .links a:not(:last-child){
    margin-right: 60px;
}
</style>