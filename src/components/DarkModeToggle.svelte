<script>
  let title = "off";

  const toggle = (e) => {
    e.preventDefault();
    const isOn = title == "on";
    if (isOn) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    title = isOn ? "off" : "on";
  };
</script>

<p>
    <a href="#" on:click={toggle}>
        {title}
    </a>
</p>
