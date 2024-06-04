window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "https://mimirosh.github.io/swagger/swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    configUrl: null // Отключение поля URL
  });

  window.ui = ui;
}
