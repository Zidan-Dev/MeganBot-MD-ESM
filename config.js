//-- MODULE EXTERNAL
import {
	watchFile,
	unwatchFile,
	readFileSync
} from 'fs'
import chalk from 'chalk'
import {
	fileURLToPath
} from 'url'
global.set = {
	desc: 'readsw',
	browser: 'Firefox',
	wm: 'Follow me on Isntagram @zinyut_',
	pack: `Follow me on Isntagram`,
	auth: '@zinyut_',
	owner: [
		['6285163999446', 'F', true, 'P', 'zidaneleanorrichard@gmail.com', 'isntagram.com/zinyut_', 'Bot Developer']
	],
	mod: JSON.parse(readFileSync('./src/mods.json')),
	APIs: {
		// API Prefix
		// name: 'https://website'
		nrtm: 'https://nurutomo.herokuapp.com',
		bg: 'http://bochil.ddns.net',
		xteam: 'https://api.xteam.xyz',
		LeysCoder: 'https://leyscoders-api.herokuapp.com'
	},
	APIKeys: {
		// APIKey Here
		// 'https://website': 'apikey'
		'https://api.xteam.xyz': 'd90a9e986e18778b',
		'https://leyscoders-api.herokuapp.com': 'dappakntlll'
	},
}
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})