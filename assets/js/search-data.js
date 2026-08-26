---
---

const searchPalette = document.querySelector("ninja-keys");

if (searchPalette) {
  const navigation = [
    {%- assign sorted_pages = site.pages | sort: "nav_order" -%}
    {%- for p in sorted_pages -%}
      {%- if p.permalink == "/" or p.nav -%}
        {
          id: "nav-{{ p.title | slugify }}",
          title: {{ p.title | jsonify }},
          description: {{ p.description | default: "" | strip_html | strip_newlines | jsonify }},
          section: "Navigation",
          handler: () => {
            window.location.href = {{ p.url | relative_url | jsonify }};
          },
        },
      {%- endif -%}
    {%- endfor -%}
  ];

  const profileLinks = [
    {
      id: "profile-google-scholar",
      title: "Google Scholar",
      section: "Profile",
      handler: () => {
        window.open("https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}", "_blank");
      },
    },
    {
      id: "profile-github",
      title: "GitHub",
      section: "Profile",
      handler: () => {
        window.open("https://github.com/{{ site.data.socials.github_username }}", "_blank");
      },
    },
    {
      id: "profile-cv",
      title: "Curriculum Vitae PDF",
      section: "Profile",
      handler: () => {
        window.open({{ site.data.socials.cv_pdf | relative_url | jsonify }}, "_blank");
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
