#include<bits/stdc++.h>
using namespace std;
 void bubbleSort(vector<int>&kkj)
 {
for(int j=kkj.size()-1;j>=0;j--)
for(int i=0;i<j;i++)
{
    if(kkj[i]>kkj[i+1])
    {
        swap(kkj[i],kkj[i+1]);
    }
}
 }
void selectionSort(vector<int>& kkj)
{
   for(int i = 0; i < kkj.size() - 1; i++)
   {
      for(int j = i + 1; j < kkj.size(); j++)
      {
         if(kkj[j] < kkj[i])
         {
            swap(kkj[j], kkj[i]);
         }
      }
   } 
}

void insertionSort(vector<int>&kkj)
{
    
}

int main()
{
    vector<int>kkj={4,5,3,1,2};
   // bubbleSort(kkj);
    selectionSort(kkj);
    for(int i=0;i<kkj.size();i++)
    {
cout<<kkj[i]<<" ";
    }
}