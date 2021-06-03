import scrapy
import requests
import logging
from scrapy.crawler import CrawlerProcess

class CoronaSpider(scrapy.Spider):
    name = 'coronaspider'
    start_urls = ['https://news.google.com/covid19/map?hl=en-US&mid=%2Fm%2F0345h&gl=US&ceid=US%3Aen'] 
    def parse(self, response):
        for trs in response.xpath('//*[has-class("pH8O4c")]//tr[position()>1 and position()<last()]'):
            case =  {
                'location': trs.xpath('th[1]//text()').extract_first(),
                'total': trs.xpath('td[1]//text()').extract_first().replace(',', ''),
                'new': trs.xpath('td[2]//text()').extract_first().replace(',', ''),
                'deaths': trs.xpath('td[5]//text()').extract_first().replace(',', '')
                }

            response = requests.post('http://corona-crawler-api-prod.eba-cpm7iis6.eu-central-1.elasticbeanstalk.com/cases', json={'case': case})
            logging.info(response)
            yield case

def lambda_handler(event, context):
    process = CrawlerProcess({
        'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
    })

    process.crawl(CoronaSpider)
    process.start()
    return {
        'statusCode': 200,
        'body': 'Done'
    }

if __name__ == "__main__":
    event = []
    context = []
    lambda_handler(event, context)
