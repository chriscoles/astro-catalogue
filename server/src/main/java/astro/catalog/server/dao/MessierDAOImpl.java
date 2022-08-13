package astro.catalog.server.dao;
import org.hibernate.query.Query;
import astro.catalog.server.entity.Messier;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
@Transactional
public class MessierDAOImpl implements MessierDAO{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Messier> getMessier() {
        Session currentSession = sessionFactory.openSession();
        String query = "FROM Messier";
        Query<Messier> theQuery =
                currentSession.createQuery(query,
                        Messier.class);
        List<Messier> messier = theQuery.getResultList();

		currentSession.close();

        return messier;
    }
}
