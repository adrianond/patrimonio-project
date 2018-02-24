package com.algaworks.patrimonio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.algaworks.patrimonio.model.Item;

/**
 * Item - tipo da minha entidade
 * Long - tipo da chave primaria da entidade(id)
 * @author adriano
 * Spring data JPA constroe uma implementação em tempo de execução da Interface JpaRepository para que eu possa ter uma entidade da minha classe Item
 */
public interface ItemRepository extends JpaRepository<Item, Long> {

}
