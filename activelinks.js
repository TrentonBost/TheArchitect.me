/*
 * @author    Trenton Bost
 * @file      activelinks.js
 * @created   2014.07.22
 * @updated   2014.07.22
 * @version   0.1.0
 */
(function( $ ) {
	$.fn.ActiveLinks = function( options ) {

		var settings = $.extend({
			activeClass: 'active'
		}, options );

		var GetPath = function( _data_ ) {
			return _data_.substring( 0, _data_.lastIndexOf('/') + 1 );
		};
		var GetFile = function( _data_ ) {
			var file = ( _data_.lastIndexOf('?') > -1 )
				? _data_.substring( _data_.lastIndexOf('/') + 1, _data_.lastIndexOf('?') )
				: _data_.substring( _data_.lastIndexOf('/') + 1, _data_.length );
			return file;
		};
		var RemoveExtension = function( _data_ ) {
			return _data_.substring( 0, _data_.lastIndexOf('.') );
		};

		var URL = $(location).attr('href');
		var path = GetPath( URL );
		var file = GetFile( URL );
		var filename = RemoveExtension( file );

		$("a[href='" + file + "']").addClass( settings.activeClass );
	};
}( jQuery ));
$(function(){
	$(document).ActiveLinks();
});