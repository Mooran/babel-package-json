using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Learning
{
    class Program
    {
        delegate int del(int i);
        static int test(del dels)
        {
            return dels(5);
        }
        static void Main(string[] args)
        {
            //DisplayValue(); //这里不会阻塞  
            //GetValueAsync(1234.5, 1.01);
            //Console.WriteLine("MyClass() End.");
            //Console.Read();
            //int j = test(x => x + x); //j = 25
            //Console.Write(j);
            //DataTable dt = new DataTable();
            //bool i = (bool)dt.Compute("1+2","");
            //Console.WriteLine(i);
            Console.ReadKey();
        }

        //public static double GetValue(double num1, double num2)
        //{
        //        for (int i = 0; i < 1000000; i++)
        //        {
        //            num1 = num1 / num2;
        //        }
        //        return num1;
        //}
        public static async void DisplayValue()
        {
            var wc = new WebClient();
            string result = await wc.DownloadStringTaskAsync("http://ss.zhongjianyu.cn");//此处会开新线程处理GetValueAsync任务，然后方法马上返回  
                                                              //这之后的所有代码都会被封装成委托，在GetValueAsync任务完成时调用  
            Console.WriteLine("Value is : " + result);
        }
    }
}
