package astro.catalog.server.service;

import astro.catalog.server.dao.MessierDAO;
import astro.catalog.server.entity.Messier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MessierServiceImpl implements MessierService{

    @Autowired
    private MessierDAO messierDAO;

    @Override
    @Transactional
    public List<Messier> getMessier() {
        return messierDAO.getMessier();
    }
}
