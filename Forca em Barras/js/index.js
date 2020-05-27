	var moveSlider = function(slider, direction) 
{
	var value = slider.value;
	var v1 = sliderX.value*4+15;
	var v2 = sliderY.value*4+5;

	var v3 = sliderX2.value*4+15;
	var v4 = sliderX3.value*4+15;

   var rectSVG = document.getElementById('rectssvg');
	rectSVG.setAttributeNS(null, direction, value * 4);
	
	var linAB = document.getElementById('lAB');
	linAB.setAttribute("x2",v1);
	linAB.setAttribute("y2",v2);
	linAB.setAttribute("x1",v3);


	var linBC = document.getElementById('lBC');
	linBC.setAttribute("x2",v1);
	linBC.setAttribute("y2",v2);
	linBC.setAttribute("x1",v4);

	var c1 = document.getElementById('c1');
	c1.setAttribute("cx",v3);
	c1.setAttribute("cy",4.3)

	var c2 = document.getElementById('c2');
	c2.setAttribute("cx",v4);
	c2.setAttribute("cy",4.3)
	
	var mx = document.getElementById('vx');
	mx.setAttribute("value",v1);

	var my = document.getElementById('vy');
	my.setAttribute("value",v2);

	var xa = linAB.attributes.x2.value-linAB.attributes.x1.value;
	var ya = linAB.attributes.y2.value - linAB.attributes.y1.value;
	var pni = Math.sqrt( xa * xa + ya * ya);
	cl1.setAttribute("value",pni);

	var xb = linBC.attributes.x2.value-linBC.attributes.x1.value;
	var yb = linBC.attributes.y2.value - linBC.attributes.y1.value;
	var pn = Math.sqrt( xb * xb + yb * yb);
	cl2.setAttribute("value",pn);

	var an = (pni * pni) + (xa * xa) - 2 * (pni * xa);
	var an7 = (ya * ya) - an;

	var senl1 = Math.round((Math.asin( linAB.attributes.y2.value / pni)) * 180 / Math.PI);
	var senl2 = Math.round((Math.asin( linBC.attributes.y2.value / pn)) * 180 / Math.PI);
	
	var csenl22 = Math.cos(Math.asin( linBC.attributes.y2.value / pn));
	var csenl11 = Math.cos(Math.asin( linAB.attributes.y2.value / pni));

	var aa =  csenl22 / csenl11;
	var f2 =  (document.getElementById('massa').value * 9.81) / ((csenl22 * aa) + csenl11);
	var f1 =  aa * f2;

	forca1.setAttribute("value",f1);
	forca2.setAttribute("value",f2);
	test2.setAttribute("value",senl1);
	test3.setAttribute("value",senl2);

}
	function a()
{
	var pes = document.getElementById('massa').value*9.81;
	peso.setAttribute("value",pes);
}


