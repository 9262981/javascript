



/*
var box = 'Mr. Lee';					//��������
//alert(box);
//alert(typeof box);
alert(box.substring(2));				//����.����(����)������д���������������͵�д��
												//����0��ʼ���ӵ�2��λ�ÿ�ʼ��ȡ��ĩβ���ַ������
												//�ǻ������ͣ�������������������ͣ�������װ����
												//��Ϊ�����Ե���ϵͳ���õķ���
												
alert('Mr. Lee'.substring(2));		//��Ч


var box = 'Mr. Lee';					//��������
box.name = 'Lee';						//���������ͼ�����
box.age = function () {			//���������ͼӷ���
	return 100;
};
alert(box);
alert(typeof box);
alert(box.substring(2));				//��Ч
alert(box.name);						//undefined����ӡ������
alert(box.age());						//����

												//�����������޷����Լ��������Ժͷ�����
												//���ǣ����Ե���ϵͳ���õ����Ժͷ���
												
var box = new String('Mr. Lee');			//�������ͣ�String����������		
box.name = 'Lee';					
box.age = function () {		
	return 100;
};
alert(box);
alert(typeof box);									//object			
alert(box.substring(2));							//��Ч
alert(box.name);									//�Զ���������Ч				
alert(box.age());									//�Զ��巽����Ч

var box = 100;
alert(box.MAX_VALUE);						//����д����������

alert(Number.MAX_VALUE);					//����д��(����.����)��������̬����
*/


var box = 1000.784;
//alert(typeof box);
//alert(typeof box.toString());			//toString()����ֵת���ַ���
//alert(box.toLocaleString());				//���ػ�
//alert(box.toFixed(2));						//С���㱣����λ����ת���ַ�������������
//alert(box.toExponential());				//��ָ����ʽ����ת���ַ���
alert(box.toPrecision(8));					//���ݴ���������ָ�����ߵ���


















