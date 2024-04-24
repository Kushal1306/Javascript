#include <bits/stdc++.h>
using namespace std;

int linear_search(vector<int>&kkj,int target)
{
	for(int i=0;i<kkj.size();i++)
	{
		if(kkj[i]==target)
		{
			return i;
			break;
		}
	}
	return -1;
}

int binary_search(vector<int>&kkj,int target)
{
	int high=kkj.size()-1;
    int low=0;
    int mid=high-(low+high)/2;
    while(low<high)
    {
        if(kkj[mid]<target)
        {
            low=mid+1;
        }
        else if(kkj[mid]>target)
        {
            high=mid-1;
        }
        else if(kkj[mid]==target)
        {
            return mid;
        }
    }
    return -1;
}


int main() {
	// your code goes here
	vector<int>kkj={5,4,3,2,1};
	int target=6;
	cout<<linear_search(kkj,target);
	return 0;
}