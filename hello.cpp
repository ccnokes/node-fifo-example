#include <iostream>
#include <fstream>
using namespace std;

int main () {
  ofstream myfile;
  myfile.open("testfifo");
  myfile << "Hello from C++.\n";
  myfile.close();
  return 0;
}
