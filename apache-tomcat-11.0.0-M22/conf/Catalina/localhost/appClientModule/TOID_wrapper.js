 // TOID_wrapper //


POBJ_NEW(PMEMobjpool *pop, TOID * oidp,
TYPE,
	pmemobj_constr contructor, void *arg)
	POBJ_ALLOC(PMEMobjpool *pop, TOID *oidp, TYPE, size_t size,
	pmemobj_constr constructor, void *arg)
	POBJ_ZNEW(PMEMobjpool *pop, TOID *oidp, TYPE)
	POBJ_ZNEW(PMEMobjpool *pop, TOID *oidp, TYPE)
	POBJ_ZALLOC(PMEMobjpool *pop, TOID *oidp, TYPE, size_t size)
	POBJ_REALLOC(PMEMobjpool *pop, TOID *oidp, TYPE, size_t size)
	POBJ_ZREALLOC(PMEMobjpool *pop, TOID *oidp, TYPE, size_t size)
	POBJ_FREE(TOID *oidp)
/**
 * 
 */