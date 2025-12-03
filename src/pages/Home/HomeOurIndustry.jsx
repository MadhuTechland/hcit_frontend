import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import industryService from '../../services/industryService';

const HomeLatestNews = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch industries from API
    const fetchIndustries = async () => {
      try {
        const response = await industryService.getAll();
        const industryData = response.data || [];

        // Transform API data to match component structure
        const transformedIndustries = industryData.map(item => ({
          id: item.id,
          image: item.image ? `http://localhost:8000/storage/${item.image}` : "assets/img/projects/1.jpg",
          shape: "assets/img/shape/4.png", // Default shape
          title: item.title,
          description: item.description,
          tags: item.tags_array || []
        }));

        setProjects(transformedIndustries);
      } catch (error) {
        console.error('Error fetching industries:', error);
        // Fallback to default data if API fails
        setProjects([
          {
            id: 1,
            image: "assets/img/projects/1.jpg",
            shape: "assets/img/shape/4.png",
            title: "Retail & CPG",
            description: "Transform the shopping experience across all channels and promote sustainability throughout your value chain",
            tags: ["Artificial", "Technology", "Machine"]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  if (loading) {
    return (
      <div className="project-style-one-area default-padding project-style-one-area pricing-style-two-area pt-50 bottom-less bg-dark">
        <div className="container">
          <div className="text-center py-5 text-light">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="project-style-one-area default-padding project-style-one-area pricing-style-two-area pt-50 bottom-less bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="fixed-content">
                <div className="site-heading">
                  <h4 className="sub-title">industry</h4>
                  <h2 className="title split-text-right split-text-in-right">Our industry focus</h2>
                </div>
                <div className="project-fun-fact">
                  <div className="js-counter">2,650+</div>
                  <h4>Finished creative projects successfully using AI support</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-8 pl-50 pl-md-15 pl-xs-15">
              <div className="project-style-one-items">
                {/* Loop through projects array */}
                {projects.map((project) => (
                  <div key={project.id} className="project-style-one-item">
                    <div className="thumb">
                      <img src={project.image} alt="Project" />
                      <img src={project.shape} alt="Shape" />
                    </div>
                    <div className="info bg-dark">
                      <div className="top">
                        <h3><a href="project-details.html">{project.title}</a></h3>
                        <p>{project.description}</p>
                      </div>
                      <div className="bottom">
                        {/* <a href="#" className="text-white">
                          Explore More <i className="fas fa-long-arrow-right"></i>
                        </a> */}
                        <Link
                          to="/services/digital-commerce"
                          className="text-white mt-auto"
                          data-aos="fade-in"
                          data-aos-duration="600"
                        >
                          Explore More <i className="fas fa-long-arrow-right"></i>
                        </Link>
                        <ul className="project-tags mt-30">
                          {project.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLatestNews;