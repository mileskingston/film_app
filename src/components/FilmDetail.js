import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import constants from '../constants';
import Rating from './Rating';
import SocialLinks from './SocialLinks';
import FilmAvatar from './FilmAvatar';
import Films from './Films';

import './FilmDetail.css';

class FilmDetail extends Component {
  renderDate(part) {
    const filmDate = new Date(this.props.details.release_date);
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];
    const day = filmDate.getDate();
    const monthIndex = filmDate.getMonth();
    const year = filmDate.getFullYear();

    if (part === 'year') {
      return year;
    }
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  renderPrice(number) {
    if (number) {
      return number.toLocaleString();
    }
  }

  renderAvatar(data) {
    const items = data.map((item) =>
      <FilmAvatar key={item.credit_id} data={item} />
    );
    return ( 
      <Fragment>{items}</Fragment> 
    );
  }

  getStyle() {
    if (this.props.details.backdrop_path) {
      return {
        backgroundImage: `url(${constants.IMG_BASE}original/${this.props.details.backdrop_path})`
      }; 
    }
  }

  render() {
    const {props} = this;
    const poster = props.details.poster_path;

    return (
      <div className="app__film__detail">
        <section className="app__row film-detail__banner" style={this.getStyle()}>
          <div className="app__container app-container--fixed film-detail__wrapper">
            <div className="app__row">
              <div className="app__col flex-grow-3 film-detail__content">
                <h1>
                  {props.details.title}&nbsp;
                  {props.details.release_date &&
                    <span>({this.renderDate('year')})</span>
                  }
                </h1>
                {props.details.overview &&
                  <div>
                    <h3 className="hide-mobile">Overview</h3>
                    <p>{props.details.overview}</p>
                  </div>
                }

                {props.details.vote_count > 0 &&
                  <Rating
                    rating={props.details.vote_average}
                    count={props.details.vote_count}
                    showTotal={true} 
                  />
                }
                <SocialLinks links={props.filmIds} />
              </div>  
              <div className="app__col film-detail__poster">
                {poster &&
                  <img
                    src={`${constants.IMG_BASE}w300/${poster}`}
                    alt={`${props.details.title} poster`}
                  />
                }
              </div>
            </div>
          </div>
        </section>

        <section className="app__row film-detail__main">
          {/* Main */}
          <div className="app__col film-detail__main-primary flex-grow-3">
            <div className="app__wrapper app-wrapper--fixed">
              {props.cast.length > 0 &&
                <div className="app__row film-detail_profile-cast">
                  <h3 className="app__col film-detail-main__title">Cast</h3>
                  {this.renderAvatar(props.cast)}
                </div>
              }
              {props.crew.length > 0 &&
                <div className="app__row film-detail_profile-crew">         
                  <h3 className="app__col film-detail-main__title">Crew</h3>
                  {this.renderAvatar(props.crew)}
                </div>
              }
              {props.trailer.length > 0 &&
                <div className="app__row film-detail_trailer">
                  <h3 className="app__col film-detail-main__title">Trailer</h3>
                  <div className="app__col film-detail_trailer-wrap">
                    <iframe
                      title={`${props.details.title} movie trailer`}
                      src={`https://www.youtube.com/embed/${props.trailer[0].key}?rel=0`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media" 
                      allowFullScreen 
                    />
                  </div>
                </div>
              }
              {props.recommended.length > 0 &&              
              <div className="app__row film-detail_profile-cast"> 
                <h3 className="app__col film-detail-main__title">Recommended</h3>
                <div className="app__col">
                  <Films results={props.recommended} />
                </div>
              </div>
              }
            </div>
          </div>

          {/* Aside */}
          <aside className="app__col film-detail__main-secondary">
            {props.details.runtime > 0 &&
              <p>
                <b>Runtime:</b>
                <br /> {props.details.runtime} minutes
              </p>
            }

            {props.details.release_date &&
              <p>
                <b>Released:</b>
                <br /> {this.renderDate()}
              </p>
            }

            {props.details.budget > 0 &&
              <p>
                <b>Budget:</b>
                <br /> ${this.renderPrice(props.details.budget)}
              </p>
            }

            {props.details.revenue > 0 &&
              <p>
                <b>Revenue:</b>
                <br /> ${this.renderPrice(props.details.revenue)}
              </p>
            }

            {props.details.genres.length > 0 &&
              <div>
                <b>Genres:</b>
                <ul className="film-detail__genres">
                  {props.details.genres && 
                    props.details.genres.map((genre, i) =>
                      <li key={genre.id}>
                        {genre.name}
                      </li>
                    )
                  }
                </ul>
              </div>
            }
          </aside>
        </section>
      </div>
    );
  }
}  

FilmDetail.displayName = 'FilmDetail';

FilmDetail.propTypes = {
  details: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    filmIds: state.filmIds,
    details: state.filmDetail,
    crew: state.filmCrew,
    cast: state.filmCast,
    trailer: state.filmTrailer,
    recommended: state.filmRecommendations
  }
}

export default connect(mapStateToProps)(FilmDetail);
