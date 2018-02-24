package com.algaworks.patrimonio.resource;

import java.util.List;
import javax.validation.Valid;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.algaworks.patrimonio.model.Item;
import com.algaworks.patrimonio.repository.ItemRepository;

@RestController
//esta mapeando em:application.properties para rodar o servidor http://localhost:4200 que executa a requição ajax( arquivo que inicializa 
//server.js que chama a requisição ajax - teste-get-itens.html
@CrossOrigin("${origem-permitida}")
public class ItemResource {
	
	//Spring faz a injeção de uma instancia de ItemRepository - IOC
	@Autowired
	private ItemRepository itemRepository;
	
	@GetMapping("/itens")
	public List<Item> listar() {
		return itemRepository.findAll();
	}
	
	//@RequestBody - pega o que há no corpo da requisição, neste caso Item/Json e "insere no objeto Item/parametro
	//@Valid - valida as informações/propriedades do objeto - objeto Item tem duas propriedades que não podem ser 'vazias' @NotEmpty
	@PostMapping("/itens")
	public Item adicionar(@RequestBody @Valid Item item) {
		return itemRepository.save(item);
	}
}
