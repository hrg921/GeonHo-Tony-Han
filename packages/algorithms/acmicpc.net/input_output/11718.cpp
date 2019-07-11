//
// Created by GeonHo Han on 2019-05-22.
//

#include <iostream>
using namespace std;

int main()
{

    string str;
    while (true)
    {
        getline(cin, str);
        if (str == "")
            break;
        cout << str << endl;
    }

    return 0;
}
