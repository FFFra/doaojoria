function walk(node)
{
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(new RegExp('\\b' + 'João Doria' + '\\b', 'gi'), 'Doão Joria');
	v = v.replace(new RegExp('\\b' + 'João Dória' + '\\b', 'gi'), 'Doão Jória');
	v = v.replace(/\bJoao Dória\b/g, "Doão Jória");
	v = v.replace(/\bJoao Doria\b/g, "Doão Jória");

	v = v.replace(/\bjoao doria\b/g, "doao joria");
	v = v.replace(/\bjoão doria\b/g, "doão joria");
	v = v.replace(/\bjoao dória\b/g, "doao jória");
	v = v.replace(/\bjoão dória\b/g, "doão jória");

	v = v.replace(/\bJoao doria\b/g, "Doao joria");
	v = v.replace(/\bJoão doria\b/g, "Doão joria");
	v = v.replace(/\bJoao dória\b/g, "Doao jória");
	v = v.replace(/\bJoão dória\b/g, "Doão jória");

	v = v.replace(/\bjoao Doria\b/g, "doao Joria");
	v = v.replace(/\bjoão Doria\b/g, "doão Joria");
	v = v.replace(/\bjoao Dória\b/g, "doao Jória");
	v = v.replace(/\bjoão Dória\b/g, "doão Jória");

	v = v.replace(/\bJOAO DORIA\b/g, "DOÃO JÓRIA");
	v = v.replace(/\bJOÃO DÓRIA\b/g, "DOÃO JÓRIA");
	v = v.replace(/\bJOAO DORIA\b/g, "DOAO JORIA");
	v = v.replace(/\bJOÃO DORIA\b/g, "DOÃO JORIA");
	v = v.replace(/\bJOÃO DÓRIA\b/g, "DOÃO JÓRIA");

	v = v.replace(/\bdoria\b/g, "joria");
	v = v.replace(/\bdória\b/g, "jória");
	v = v.replace(/\bDoria\b/g, "Joria");
	v = v.replace(/\bDória\b/g, "Jória");
	

	v = v.replace(/\bGestor\b/g, "Jestor");
	v = v.replace(/\bgestor\b/g, "jestor");

	v = v.replace(/\bSérgio Moro\b/g, "$ervo Moro");
	v = v.replace(/\bsergio moro\b/g, "$ervo Moro");
	v = v.replace(/\bSérgio moro\b/g, "$ervo Moro");
	v = v.replace(/\bsérgio Moro\b/g, "$ervo Moro");
	
	textNode.nodeValue = v;
}

walk(document.body);

new MutationObserver(function() {
	walk(document.body);
}).observe(document.body, {
	childList: true
});


