window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});

jQuery(function ($) {
  $('#content').annotator();
});

// schéma

/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create series
// https://www.amcharts.com/docs/v5/charts/flow-charts/
var series = root.container.children.push(am5flow.Sankey.new(root, {
  sourceIdField: "from",
  targetIdField: "to",
  valueField: "value",
  paddingRight: 300
}));

series.nodes.get("colors").set("step", 2);

series.links.template.setAll({
  tooltipText: "De : [bold]{sourceId}[/]\nÀ : [bold]{targetId}[/]"
});


// Set data
// https://www.amcharts.com/docs/v5/charts/flow-charts/#Setting_data
series.data.setAll([
  { from: "Directrice", to: "Formulation du mandat", value: 5 },
  { from: "Directeur de production", to: "Formulation du mandat", value: 5 },
  { from: "Partenaire en ressources humaines", to: "Formulation du mandat", value: 5 },
    { from: "Directrice", to: "Prédiagnostic entretien", value: 5 },
  { from: "Directeur de production", to: "Prédiagnostic entretien", value: 5 },
    { from: "Partenaire en ressources humaines 2", to: "Prédiagnostic entretien", value: 5 },
  { from: "Chef d'équipe entretien", to: "Prédiagnostic entretien", value: 5 },
    { from: "Travailleur entretien", to: "Prédiagnostic entretien", value: 5 },
    { from: "Directeur de production", to: "Prédiagnostic boulangerie", value: 5 },
  { from: "Chef d'équipe boulangerie", to: "Prédiagnostic boulangerie", value: 5 },
    { from: "Chef d'équipe boulangerie", to: "Comité de suivi équipement mobile", value: 5 },
   { from: "Travailleur 1 boulangerie", to: "Prédiagnostic boulangerie", value: 5 },
     { from: "Travailleur 2 boulangerie", to: "Comité pétrin", value: 5 },
   { from: "Travailleur 3 boulangerie", to: "Comité pétrin", value: 5 },


  { from: "Chef d'équipe viennoiserie", to: "Comité de suivi équipement mobile", value: 5 },
     { from: "Chef d'équipe Emballage-livraison", to: "Investigations approfondies emballage", value: 5 },
       { from: "Responsable Emballage-livraison", to: "Investigations approfondies emballage", value: 5 },
       { from: "Chef d'équipe Emballage-livraison", to: "Comité de suivi équipement mobile", value: 5 },
       { from: "Responsable Emballage-livraison", to: "Comité de suivi équipement mobile", value: 5 },
  
]);


// Make stuff animate on load
series.appear(1000, 100);
