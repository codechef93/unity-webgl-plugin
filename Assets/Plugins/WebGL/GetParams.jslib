mergeInto(LibraryManager.library, {
	GetUserToken: function () {
		var url = new URL(window.location.href);
		var token = url.searchParams.get("token")
		if (token == null)
			token = ''
		
		var bufferSize = lengthBytesUTF8(token) + 1;
		var buffer = _malloc(bufferSize);
		stringToUTF8(token, buffer, bufferSize);
		return buffer;
	},
	GetTableID: function () {
		var url = new URL(window.location.href);
		var table = url.searchParams.get("table")
		if (table == null)
			table = ''
		
		var bufferSize = lengthBytesUTF8(table) + 1;
		var buffer = _malloc(bufferSize);
		stringToUTF8(table, buffer, bufferSize);
		return buffer;
	},
	RedirectTo: function (url) {
		window.location.href = Pointer_stringify(url);
	}
});