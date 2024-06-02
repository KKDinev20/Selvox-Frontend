

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

    

    <div class="cols">
        <div class="flex mb-4 space-x-4">
            <div class="w-3/5 containder">


                <button> I'M READY</button>
            </div>
            <div class="w-2/5 containder">
                <img src="../assets/LP.png" alt="photo"/>
            </div>
        </div>
    </div>
</template>

<style>

.cols {
    margin: 30px 20px;
    gap: 20px;
}

.containder {
    height: 75vh;

}

.containder:first-child {
    background-color: lemonchiffon;
}

.containder:last-child {
    background: rgba(255, 202, 212, 0.29);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(222, 172, 185, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);
    justify-content: center;
    flex-flow: row nowrap;
    display: flex;
}
nav {
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

nav .links {
  font-size: 18px;
}

nav a.logo {
  font-size: 33px;
  color: #FFB7CA;
  font-weight: 600;
}

button {
  --pink: #FFB7CA;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--pink);
  color: var(--pink);
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

nav .links a:not(:last-child) {
  margin-right: 60px;
}

/* Media Queries for responsiveness */
@media screen and (max-width: 768px) {
  nav {
    flex-wrap: wrap; /* Wrap content on smaller screens */
    justify-content: center; /* Center content horizontally */
  }
  .links {
    margin-top: 20px; /* Add space between logo and links on smaller screens */
    text-align: center; /* Center links vertically */
  }
  button {
    margin-top: 10px; /* Add space between links and button on smaller screens */
  }
}
</style>