/*
 * 
 */
//function radoc_title(title) {
//	var defaultTitle = "rAthena Documentation";
//	if (title === 'null') {
//		document.title = "" + defaultTitle + "";
//		document.write("<title>" + title_ + "</title>");
//	}
//	else {
//		document.title = "" + title + " - " + defaultTitle + "";
//		document.write("<title>" + title + " - " + title_ + "</title>");
//	}
//}

/*
 * 
 */
function radoc_header(basepath) {
	var title = "rAthena Documentation and User Guide";
	var version = "Developer Preview";

	var base = (basepath == null || basepath === 'null') ? '' : basepath;

	document.write(
	"<header>"+
	"<div id='title'><h1 id='doc_title'>" + title + " " + version + "</h1></div>"+
	"<div id='urls'>"+
	"	<ul>"+
	"		<li><a href='https://rathena.org/board/' title='Forum'>Forum</a></li>"+
	"		<li class='urls_right'><a href='" + base + "downloads.html' title='Download'>Download</a></li>"+
	"		<li class='urls_right'><a href='" + base + "index.html#contributing' title='Contributing'>Contributing</a></li>"+
	"		<li class='urls_right'><a href='" + base + "toc.html' title='rAthena'>Table of Contents</a></li>"+
	"	</ul>"+
	"</div><div class='clear line'></div>"+
	"</header>");
}

/*
 * 
 */
function radoc_home(basepath) {
	var base = (basepath == null || basepath === 'null') ? '' : basepath;

	document.write(
	"<a href='" + base + "index.html' title=''>Documentation Home Page</a> &#8250;");
}

/*
 * 
 */
function radoc_footer(basepath) {
	var base = (basepath == null || basepath === 'null') ? '' : basepath;
	
	document.write(
	"<p><a href='#top'>Top of Page</a></p>"+
	"<p>Copyright &#169; 2003 - 2016 "+
	"&nbsp;&middot;&nbsp; <a href='https://rathena.org/board' title='rAthena'>rAthena</a>"+
	"&nbsp;&middot;&nbsp; <a href='" + base + "credits.html' title='Credits'>Credits</a>"+
	"</p>");
}

function radoc_username(username) {	
	document.write("<a href='https://github.com/" + username + "' title='" + username + " on Github!' target='_blank'><span class='external'>" + username + "</span></a>");
}

function radoc_gitHash(hash) {	
	document.write("<a href='https://github.com/rathena/rathena/commit/" + hash + "' title='View changes on " + hash + "' target='_blank'><span class='external'>" + hash + "</span></a>");
}

function radoc_elements() {
	document.createElement("rAthena");
}
