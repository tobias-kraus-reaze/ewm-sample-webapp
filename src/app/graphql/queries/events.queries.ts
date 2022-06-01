import { gql } from "apollo-angular";

export const GET_EVENT_LISTING = gql`
  query getEventListing(
    $appId: String!
    $lang: String
    $numberOfEvents: Int
  ) {
    getEventListing(sortBy: "date", first: $numberOfEvents, sortOrder: "DESC", appId: $appId, defaultLanguage: $lang) {
      edges {
        node {
          id
          date
          topline
          headline
          slug
          timeStart
          timeEnd
          eventLanguage
          eventFormatValue
          eventFormatOptionsProvider {
            ... on object_OptionsProvider {
              id
              label
            }
          }
          eventTopicValue
          eventTopicOptionsProvider {
            ... on object_OptionsProvider {
              id
              label
            }
          }
          eventTypeValue
          eventTypeOptionsProvider {
            ... on object_OptionsProvider {
              id
              label
            }
          }
          tags {
            ... on element_tag {
              name
            }
          }
          pageGql: page {
            ... on document_page {
              fullpath
            }
          }
          image {
            ... on hotspotimage {
              image {
                fullpath
              }
            }
          }
          video {
            ... on Video {
              data {
                ... on asset {
                  filename
                  type
                  mimetype
                  parent {
                    ... on asset_folder {
                      fullpath
                    }
                  }
                }
              }
              poster {
                fullpath
              }
            }
          }
          location {
            ... on object_Location {
              name
            }
          }
        }
      }
    }
  }
`;
