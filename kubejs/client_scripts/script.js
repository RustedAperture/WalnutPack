// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('rei.hide.items', event => {
	// Hide items in JEI here
	event.hide('mythicmetals:copper_axe'),
	event.hide('mythicmetals:copper_pickaxe'),
	event.hide('mythicmetals:copper_shovel'),
	event.hide('mythicmetals:copper_sword'),
	event.hide('mythicmetals:copper_hoe'),
	event.hide('mythicmetals:copper_helmet'),
	event.hide('mythicmetals:copper_leggings'),
	event.hide('mythicmetals:copper_boots'),
	event.hide('mythicmetals:copper_chestplate'),
	event.hide('mythicmetals:bronze_axe'),
	event.hide('mythicmetals:bronze_pickaxe'),
	event.hide('mythicmetals:bronze_shovel'),
	event.hide('mythicmetals:bronze_sword'),
	event.hide('mythicmetals:bronze_hoe'),
	event.hide('mythicmetals:bronze_helmet'),
	event.hide('mythicmetals:bronze_leggings'),
	event.hide('mythicmetals:bronze_boots'),
	event.hide('mythicmetals:bronze_chestplate')
})