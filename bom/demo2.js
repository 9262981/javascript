



/*

alert(screenLeft);
alert(screenTop);

���������ԣ��������ʶ���ͻᵱ����û��������ʼ���ı������ᱨ��

���Ǿͱ���ǿ�����������ǰ�����window.


alert(window.screenLeft);				//IE֧��
alert(window.screenTop);

alert(typeof window.screenLeft);			//���undefined������number����ֵ

alert(window.screenX);				//IE��֧���ˣ�֧�ֻ��
alert(window.screenY);

//�����������
var leftX = typeof window.screenLeft == 'number' ? window.screenLeft : window.screenX;
var topY = typeof window.screenTop == 'number' ? window.screenTop : window.screenY;

alert(leftX);
alert(topY);

alert(window.innerWidth);				//����ҳ��Ĵ�С
alert(window.innerHeight);

alert(window.outerWidth);			//����+�߿��С
alert(window.outerHeight);

alert(document.documentElement.clientWidth);			//IE֧��
alert(document.documentElement.clientHeight);


//���������ȡ�ӿ�(���ӷ�Χ��ҳ�洰��)

var width = window.innerWidth;		//window.�����У���ΪIE��֧��
var height = window.innerHeight;		//���֧��inner�ģ���ô��ʹ������

//��֧�ֵľ�����document����ķ���

if (typeof width != 'number') {
	if (document.compatMode == 'CSS1Compat') {
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
	} else {
		width = document.body.clientWidth;
		height = document.body.clientHeight;
	}
}

alert(width);
alert(height);


//3.x�ɰ���֧�֣��°�Ĭ�ϲ�֧����
//moveTo(100,100);
moveBy(10,10);			//IEԭ��֧�֣��ȸ��°治֧��

//������С��������һ��
//resizeTo(300,300);
resizeBy(-10,-10);

*/












