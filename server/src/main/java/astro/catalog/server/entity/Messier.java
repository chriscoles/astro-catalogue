package astro.catalog.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="messier_catalog")
public class Messier {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "NGC", nullable = false)
    private int ngc;

    @Column(name = "Type", nullable = false)
    private String type;

    @Column(name = "Magnitude", nullable = false)
    private float magnitude;

    @Column(name = "Size", nullable = false)
    private String size;

    @Column(name = "Distance", nullable = false)
    private int distance;

    @Column(name = "RA", nullable = false)
    private String ra;

    @Column(name = "Dec", nullable = false)
    private String dec;

    @Column(name = "Constellation", nullable = false)
    private String constellation;

    @Column(name = "Season", nullable = false)
    private String season;

    @Column(name = "Name", nullable = false)
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNgc() {
        return ngc;
    }

    public void setNgc(int ngc) {
        this.ngc = ngc;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public float getMagnitude() {
        return magnitude;
    }

    public void setMagnitude(float magnitude) {
        this.magnitude = magnitude;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public String getRa() {
        return ra;
    }

    public void setRa(String ra) {
        this.ra = ra;
    }

    public String getDec() {
        return dec;
    }

    public void setDec(String dec) {
        this.dec = dec;
    }

    public String getConstellation() {
        return constellation;
    }

    public void setConstellation(String constellation) {
        this.constellation = constellation;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Messier{" +
                "id='" + id + '\'' +
                ", ngc=" + ngc +
                ", type='" + type + '\'' +
                ", magnitude=" + magnitude +
                ", size='" + size + '\'' +
                ", distance=" + distance +
                ", ra='" + ra + '\'' +
                ", dec='" + dec + '\'' +
                ", constellation='" + constellation + '\'' +
                ", season='" + season + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
