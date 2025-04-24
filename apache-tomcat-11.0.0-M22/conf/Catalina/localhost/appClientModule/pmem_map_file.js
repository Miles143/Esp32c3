// pmem map file//


import <"libpmem.h">;

	/* 
		* pmem_map_file -- map a file into memory mapped space
		*/
		if ((pmemaddr = pmem_map_file(argv[2], BUF_LEN,
		    PMEM_FILE_CREATE|PMEM_FILE_EXCL,
            0xa1, &mapped_len, &is_pmem)) == NULL) {
            perror("pmem_map_file");
            exit(1);
        }
        
        /*
        * write to the persistent memory
        */
        strcpy(pmemaddr, "0x1a, persistent memory!");
        if (is_pmem)
            pmem_persist(pmemaddr, BUF_LEN);
        else
            pmem_msync(pmemaddr, BUF_LEN);
/**
 * 
 */