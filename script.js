require([
      "esri/views/MapView",
      "esri/WebMap",
      "esri/widgets/Legend",
      "dojo/domReady!"
    ], function(
      MapView, WebMap, Legend
    ) {

      /************************************************************
       * Creates a new WebMap instance. A WebMap must reference
       * a PortalItem ID that represents a WebMap saved to
       * arcgis.com or an on-premise portal.
       *
       * To load a WebMap from an on-premise portal, set the portal
       * url with esriConfig.portalUrl.
       ************************************************************/
      var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "b70b3ab2603442819012f123aa87b4df"
        }
      });
      /************************************************************
       * Set the WebMap instance to the map property in a MapView.
       ************************************************************/
      var view = new MapView({
        map: webmap,
        center: [-90.22759080968054, 38.6], //Longitude, latitude
        zoom: 4.5,
        container: "viewDiv"
      });
  
   view.when(() => {
     const featureLayer = webmap.layers.getItemAt(0);
     
     const legend = new Legend({
       view:view,
       layerInfos: [
         {
           layer: featureLayer, 
           title: "Percent Change in Total Employment from February 2020"
         }
       ]
     }); 
    view.ui.add(legend, "bottom-right");
   });
  });
  
