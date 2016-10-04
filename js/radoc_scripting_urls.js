/*
 * 
 */
function radoc_scripting_urls(basepath) {
	var base = (basepath == null || basepath === 'null') ? '' : basepath;

	document.write(
	"<div class='table'>"+
	"	<div class='col'>"+
	"		<h3>Basic Info</h3>"+
	"		<ul>"+
	"			<li><a href='" + base + "index.html' title='Introduction'>Introduction</a></li>"+
	"			<li>Variables"+
	"				<ul>"+
	"					<li><a href='" + base + "variables.html' title='Script Variables'>Script Variables</a></li>"+
	"					<li><a href='" + base + "player_parameter.html' title='Player\' Parameter'>Player's Parameter</a></li>"+
	"					<li><a href='" + base + "constants.html' title='Constants'>Constants</a></li>"+
	"					<li><a href='" + base + "arrays.html' title='Arrays'>Arrays</a></li>"+
	"					<li><a href='" + base + "oprators.html' title='Operators'>Operators</a></li>"+
	"					<li><a href='" + base + "assigning_a_variable.html' title='Assigning a Variable'>Assigning a Variable</a></li>"+
	"				</ul>"+
	"			</li>"+
	"		</ul>"+
	"	</div>"+
	"	<div class='col'>"+
	"		<h3>Definition Commands</h3>"+
	"		<ul>"+
	"			<li><a href='" + base + "npc.html' title='NPC'>NPC</a></li>"+
	"			<li><a href='" + base + "mapflag.html' title='Mapflag'>Mapflag</a></li>"+
	"			<li><a href='" + base + "shop.html' title='Shop'>Shop</a></li>"+
	"			<li><a href='" + base + "function.html' title='Function'>Function</a></li>"+
	"			<li><a href='" + base + "monster.html' title='Permanent Monster Spawn'>Permanent Monster Spawn</a></li>"+
	"			<li><a href='" + base + "monster.html' title='Warp Point'>Warp Point</a></li>"+
	"			<li><a href='" + base + "label.html' title='Label'>Label</a></li>"+
	"		</ul>"+
	"	</div>"+
	"	<div class='col'>"+
	"		<h3>Script Commands</h3>"+
	"		<ul>"+
	"			<li><a href='" + base + "information_commands.html' title='Information-Retrieving'>Information-retrieving</a></li>"+
	"			<li><a href='" + base + "checking_commands.html' title='Checking Condition'>Checking Condition</a></li>"+
	"			<li><a href='" + base + "player_commands.html' title='Player'>Player</a></li>"+
	"			<li><a href='" + base + "mob_npc_commands.html' title='Mob/NPC'>Mob/NPC</a></li>"+
	"			<li><a href='" + base + "instance_commands.html' title='Instance'>Instance</a></li>"+
	"			<li><a href='" + base + "quest_commands.html' title='Quest Log'>Quest Log</a></li>"+
	"			<li><a href='" + base + "battleground_commands.html' title='Battleground'>Battleground</a></li>"+
	"			<li><a href='" + base + "pet_commands.html' title='Pet'>Pet</a></li>"+
	"			<li><a href='" + base + "pet_ai_commands.html' title='Pet AI'>The Pet AI</a></li>"+
	"			<li><a href='" + base + "homunculus_commands.html' title='Homunculus'>Homunculus</a></li>"+
	"			<li><a href='" + base + "mercenary_commands.html' title='Mercenary'>Mercenary</a></li>"+
	"			<li><a href='" + base + "party_commands.html' title='Party'>Party</a></li>"+
	"			<li><a href='" + base + "other_commands.html' title='Other Commands'>Other Commands</a></li>"+
	"		</ul>"+
	"	</div>"+
	"</div>"+
	"<div class='clear'></div>");
}
