#include<bits/stdc++.h>
using namespace std;
//  void position(vector<int>&kkj,int target)
//  {
//  int first=-1;
//  int last=-1;
//  for(int i=0;i<kkj.size();i++)
//  {
//   if(kkj[i]!=target)
//   continue;
//   if(first==-1)first=i;
//   else
//   last=i;
//  }
//  cout<<first<<" "<<last<<"\n";
//  }
void first(vector<int>&kkj,int target)
{
    int low=0;
    int res=-1;
    int high=kkj.size()-1;
    int mid=high-(low+high)/2;
    while(low<=high)
    {
        if(kkj[mid]>target)
        {
            high=mid-1;
        }
        else if(kkj[mid]<target)
        {
            low=mid+1;
        }
        else{
            res=mid;
            high=mid-1;
        }
    }
    cout<<res<<"\n";
}
void fsecond(vector<int>&kkj,int target)
{
    int low=0;
    int res=-1;
    int high=kkj.size()-1;
    int mid=high-(low+high)/2;
    while(low<=high)
    {
        if(kkj[mid]>target)
        {
            high=mid-1;
        }
        else if(kkj[mid]<target)
        {
            low=mid+1;
        }
        else{
            res=mid;
            low=mid+1;
        }
    }
        cout<<res<<"\n";

}
int main()
{
    vector<int>kkj={4,2,3,1,2};
   // bubbleSort(kkj);
   int target=2;
    //position(kkj,target);
    first(kkj,target);
    fsecond(kkj,target);
    for(int i=0;i<kkj.size();i++)
    {
cout<<kkj[i]<<" ";
    }
}