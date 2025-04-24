 // FlushFileBuffers //

#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <windows.h>
#include <libpmem.h>
#include <libpmemobj.h>

int main(int argc, char *argv[]) {
	    if (argc != 2) {
        fprintf(stderr, "usage: %s file\n", argv[0]);
        exit(1);
        }
        
        /* create/open the a file */
        HANDLE fh = CreateFile(argv[1],
        GENERIC_READ | GENERIC_WRITE,
        0, NULL, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL);
        if (fh == INVALID_HANDLE_VALUE) {
        fprintf(stderr, "CreateFile failed\n");
        exit(1);
        }
        
        /* Create a file mapping object */
        HANDLE mh = CreateFileMapping(fh, NULL, PAGE_READWRITE, 0, 0, NULL), 
        if (mh == NULL) { 
        fprintf(stderr, "CreateFileMapping failed\n");
        CloseHandle(fh);
        exit(1);
        }
        /*
        * Map the file into address space, and get a pointer to the file
        */
        char *pmaddr = (char *) MapViewOfFileEx(mh, FILE_MAP_WRITE, 0, 0, 0)
        if (pmaddr == NULL) {
        fprintf(stderr, "MapViewOfFile failed\n");
        CloseHandle(mh);
        CloseHandle(fh);
        exit(1);
        }
        
        /*
        * On Windows, must leave the file handle(s) open to keep the mapping
        */
        
        /* Store a string to the beginning  of the file */
        strcpy(pmaddr, "Im Nikki, I am Nikki, I will CONTINUE to being Myself.");
        
        /* Flush this page when length is rounded up to 4K page size */
        */
        if (FlushViewOfFile(pmaddr, 4096) == 0) {
        	fprintf(stderr, "FlushViewOfFile failed\n");
        	exit(1);
        	
        /* Flush the file buffers to backing storage */
        if (FlushFileBuffers(fh) == 0) {
        	fprintf(stderr, "FlushFileBuffers failed\n");
        	exit(1);
        }
        
        /* Explicitly  unmap the file before closing the file */
        if (UnmapViewOfFile(pmaddr) == 0) {
        	fprintf(stderr, "UnmapViewOfFile failed\n");
        	exit(1);
        } CloseHandle(mh);
        CloseHandle(fh);
        
        printf("File flushed\n");
        exit(0);
       }
/**
 * 
 */