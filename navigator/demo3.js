




/*
	�������
	var width = window.innerWidth;

	if (typeof width != 'number') {
		width = document.documentElement.clientWidth;
	}

	alert(width);

	
	//�����bug(ȱ��)

	var box = {
		toString : function () {},			//IE��С BUG
		toString2 : function () {}
	};


	for (var o in box) {
		alert(o);
	}

	
	//window����֧��opera����
	//alert(window.opera);

	for (var o in window.opera) {
		document.write(o + '<br />'); 
	}
	
	alert(window.opera.version());	//opera������İ汾��
	
	if (client.engine.opera) {
		alert("Ŀǰʹ�õ���Opera��������汾Ϊ��" + client.engine.ver);
	}

	if (client.engine.webkit) {
		alert('WebKit����İ汾Ϊ��' + client.engine.ver);
	}	
	
	if (client.engine.ie) {
		alert('ie����İ汾Ϊ��' + client.engine.ver);
	}

	
*/



//�û������ַ���
document.write(navigator.userAgent);
document.write('<br />');
document.write(navigator.platform);


	
var client = function () {					//����һ������
	
	//����
	var engine = {
		ie : false,									//�����������ȷ���Ƿ���IE����
		gecko : false,
		webkit : false,
		khtml : false,
		opera : false,
		
		//����İ汾
		ver : 0
	};
	
	//�����
	var browser = {
		ie : false,
		firefox : false,
		chrome : false,
		safari : false,
		opera : false,
		
		//������İ汾��
		ver : 0,
		//�����ͨ������
		name : ''
	};
	
	//ϵͳ
	var system = {
		win : false,
		mac : false,
		x11 : false,
		
		//ϵͳ����
		sysname : ''
	};
	
	
	
	//���ļ�������
	var ua = navigator.userAgent;
	var p = navigator.platform;
	
	if (p.indexOf('Win') == 0) {
		system.win = true;						//����ȷ����windowsϵͳ
		system.sysname = 'Windows';
	} else if (p.indexOf('Mac') == 0) {
		system.mac = true;						//����ȷ����Macϵͳ
		system.sysname = 'Macintosh';
	} else if (p == 'X11' || p.indexOf('Linux') == 0) {
		system.x11 = true;						//����ȷ����Macϵͳ
		system.sysname = 'Linux';
	}
	
	
	if (window.opera) {
		engine.opera = browser.opera = true;				//��ʾȷ��opera����
		engine.ver = browser.ver = window.opera.version();
		browser.name = 'Opera';
	} else if (/AppleWebKit\/(\S+)/.test(ua)) {
		engine.webkit = true;				//��ʾȷ��webkit����
		engine.ver = RegExp['$1'];
		if (/Chrome\/(\S+)/.test(ua)) {
			browser.chrome = true;
			browser.ver = RegExp['$1'];
			browser.name = 'Chrome';
		} else {
			browser.safari = true;
			if (/Version\/(\S+)/.test(ua)) browser.ver = RegExp['$1'];
			browser.name = 'Safari';
		}
	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
		engine.gecko = true;				//��ʾȷ��gecko����
		engine.ver = RegExp['$1'];
		if (/Firefox\/(\S+)/.test(ua)) {
			browser.firefox = true;
			browser.ver = RegExp['$1'];
			browser.name = 'Firefox';
		}
	} else if (/MSIE ([^;]+)/.test(ua)) {
		engine.ie = browser.ie = true;						//��ʾȷ��ie����
		engine.ver = browser.ver = RegExp['$1'];
		browser.name = 'Internet Explorer';
	}
	
	return {										//����һ�����󣬿���ͬʱ�������棬�������ϵͳ�Ķ���
		engine : engine,						//ǰһ��engine�����ԣ���һ��engine�Ƕ���ֵ
		browser : browser,
		system : system
	}
	
}();													//����ִ�У�����ֵ





alert(client.system.sysname + '|' +client.browser.name + client.browser.ver);













