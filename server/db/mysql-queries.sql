SELECT service_type.type_id, service_type.title, service_archtype.archtype
FROM service_type
INNER JOIN service_archtype
ON service_type.arch_id = service_archtype.arch_id;
