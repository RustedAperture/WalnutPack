// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({output: 'mythicmetals:copper_axe'}),
	event.remove({output: 'mythicmetals:copper_pickaxe'}),
	event.remove({output: 'mythicmetals:copper_shovel'}),
	event.remove({output: 'mythicmetals:copper_sword'}),
	event.remove({output: 'mythicmetals:copper_hoe'}),
	event.remove({output: 'mythicmetals:copper_helmet'}),
	event.remove({output: 'mythicmetals:copper_leggings'}),
	event.remove({output: 'mythicmetals:copper_boots'}),
	event.remove({output: 'mythicmetals:copper_chestplate'}),
	event.remove({output: 'mythicmetals:bronze_axe'}),
	event.remove({output: 'mythicmetals:bronze_pickaxe'}),
	event.remove({output: 'mythicmetals:bronze_shovel'}),
	event.remove({output: 'mythicmetals:bronze_sword'}),
	event.remove({output: 'mythicmetals:bronze_hoe'}),
	event.remove({output: 'mythicmetals:bronze_helmet'}),
	event.remove({output: 'mythicmetals:bronze_leggings'}),
	event.remove({output: 'mythicmetals:bronze_boots'}),
	event.remove({output: 'mythicmetals:bronze_chestplate'})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})