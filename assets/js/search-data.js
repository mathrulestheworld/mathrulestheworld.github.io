const searchPalette = document.querySelector("ninja-keys");

if (searchPalette) {
  const navigation = [{
          id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{
          id: "nav-publications",
          title: "publications",
          description: "complete publication record, grouped by publication type and ordered reverse chronologically.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{
          id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{
          id: "nav-talks",
          title: "talks",
          description: "research talks and conference presentations in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },];

  const profileLinks = [
    {
      id: "profile-google-scholar",
      title: "Google Scholar",
      section: "Profile",
      handler: () => {
        window.open("https://scholar.google.com/citations?user=dmo4-YMAAAAJ", "_blank");
      },
    },
    {
      id: "profile-github",
      title: "GitHub",
      section: "Profile",
      handler: () => {
        window.open("https://github.com/mathrulestheworld", "_blank");
      },
    },
    {
      id: "profile-cv",
      title: "Curriculum Vitae PDF",
      section: "Profile",
      handler: () => {
        window.open("/assets/pdf/cv.pdf", "_blank");
      },
    },
  ];

  const populateSearchPalette = async () => {
    await customElements.whenDefined("ninja-keys");
    searchPalette.data = navigation.concat(profileLinks);
  };

  window.openSearchModal = () => {
    const $navbarNav = $("#navbarNav");
    if ($navbarNav.hasClass("show")) {
      $navbarNav.collapse("hide");
    }
    searchPalette.open();
  };

  populateSearchPalette();
}
