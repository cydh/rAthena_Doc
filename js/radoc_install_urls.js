/*
 * 
 */
function radoc_install_urls(basepath) {
	var base = (basepath === 'null') ? '' : basepath;

	document.write(
	"<div class='table'>"+
	"	<div class='col'>"+
	"		<ul>"+
	"			<li>Installation Instructions"+
	"				<ul>"+
	"					<li><a href='installation-on-centos.html' title='Installation on CentOS'>CentOS</a></li>"+
	"					<li><a href='installation-on-windows.html' title='Installation on Windows'>Windows</a></li>"+
	"				</ul>"+
	"			</li>"+
	"			<li><a href='import-sql.html' title='Importing SQL Files'>Importing SQL Files</a></li>"+
	"			<li>Connecting Server"+
	"				<ul>"+
	"					<li><a href='subnet_conf.html' title='Configure subnet_conf'>Configure Subnet</a></li>"+
	"					<li><a href='inter_conf.html' title='Configure inter_athena.conf'>Configure Interconnection (inter_athena.conf)</a></li>"+
	"					<li><a href='login_conf.html' title='Configure login_athena.conf'>Configure Login Server (login_athena.conf)</a></li>"+
	"					<li><a href='char_conf.html' title='Configure char_athena.conf'>Configure Char Server (char_athena.conf)</a></li>"+
	"					<li><a href='map_conf.html' title='Configure map_athena.conf'>Configure Map Server (map_athena.conf)</a></li>"+
	"					<li><a href='choosing-packet-version.html' title='Choosing Packet Version'>Choosing Packet Version</a></li>"+
	"					<li><a href='core-feature.html' title='Knowing rAthena core.h Features'>Knowing rAthena core.h Features</a></li>"+
	"				</ul>"+
	"			</li>"+
	"		</ul>"+
	"	</div>"+
	"</div>"+
	"<div class='clear'></div>");
}
