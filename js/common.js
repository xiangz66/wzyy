/**
 * 纵向合并单元格
 */
jQuery.fn.rowspan = function(colIdx) {
    return this.each(function(){
        var that;
        $('tr', this).each(function(row) {
            $('td:eq('+colIdx+')', this).filter(':visible').each(function(col) {
                if (that!=null && $(this).html() == $(that).html()) {
                    rowspan = $(that).attr("rowSpan");
                    if (rowspan == undefined) {
                        $(that).attr("rowSpan",1);
                        rowspan = $(that).attr("rowSpan"); }
                    rowspan = Number(rowspan)+1;
                    $(that).attr("rowSpan",rowspan);
                    $(this).hide();
                } else {
                    that = this;
                }
                $(that).css("vertical-align", "middle");
            });
        });
    });
}

function emptyAlert(eleId, alertText) {
	if (/^\s*$/.test($('#'+eleId).val())) {
		jAlert(alertText, '提醒');
		$('#'+eleId).focus();
		return true;
	}
	return false;
}